export default async function Page({
    searchParams
  }: {
    searchParams: { q: string; offset: string };
  }) {
    // const search = searchParams.q ?? '';
    // const offset = searchParams.offset ?? 0;
    // const { products, newOffset, totalProducts } = await getProducts(
    //   search,
    //   Number(offset)
    // );
  
    // return (
    //   <Tabs defaultValue="all">
    //     <div className="flex items-center">
    //       <TabsList>
    //         <TabsTrigger value="all">All</TabsTrigger>
    //         <TabsTrigger value="active">Active</TabsTrigger>
    //         <TabsTrigger value="draft">Draft</TabsTrigger>
    //         <TabsTrigger value="archived" className="hidden sm:flex">
    //           Archived
    //         </TabsTrigger>
    //       </TabsList>
    //       <div className="ml-auto flex items-center gap-2">
    //         <Button size="sm" variant="outline" className="h-8 gap-1">
    //           <File className="h-3.5 w-3.5" />
    //           <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
    //             Export
    //           </span>
    //         </Button>
    //         <Button size="sm" className="h-8 gap-1">
    //           <PlusCircle className="h-3.5 w-3.5" />
    //           <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
    //             Add Product
    //           </span>
    //         </Button>
    //       </div>
    //     </div>
    //     <TabsContent value="all">
    //       <ProductsTable
    //         products={products}
    //         offset={newOffset ?? 0}
    //         totalProducts={totalProducts}
    //       />
    //     </TabsContent>
    //   </Tabs>
    // );
    return (<h1>Dashboard</h1>);
  }
  