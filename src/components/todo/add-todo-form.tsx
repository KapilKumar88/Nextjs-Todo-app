"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { TodoStatus } from "@prisma/client";
import { useCreateTodoMutation } from "@/lib/redux/api/todo/todo-api-slice";
import { todoSchema } from "@/lib/validationSchemas/todo-validation-schema";

export default function AddTodoForm() {
  const [CreateTodo] = useCreateTodoMutation();
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      status: "",
      description: "",
    },
  });

  const onSubmit = async (data: {
    title: string;
    description?: string;
    status: string;
  }): Promise<void> => {
    try {
      const response = await CreateTodo({
        title: data.title,
        description: data.description,
        status: data.status as TodoStatus,
      });

      if (response?.data?.status) {
        toast({
          description: response?.data?.message,
          variant: "success",
        });
      }
      
      form.reset();
      setOpen(false);
    } catch (error: any) {
      toast({
        description: error?.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Button size="sm" className="h-8 gap-1" onClick={() => setOpen(true)}>
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Product
        </span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Item</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="TODO">Pending</SelectItem>
                        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                        <SelectItem value="DONE">Done</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
