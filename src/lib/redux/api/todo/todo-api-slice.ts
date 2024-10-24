import { apiSlice } from "../api-slice";

const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/todo",
        method: "GET",
      }),
    }),
    createTodo: builder.mutation({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        url: `/todo/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApiSlice;
