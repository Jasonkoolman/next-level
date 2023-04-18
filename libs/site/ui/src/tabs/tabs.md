# Tabs

```tsx
export function TabsDemo() {
  return (
    <Tabs defaultValue="circles" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="circles">Circles</TabsTrigger>
        <TabsTrigger value="triangles">Triangles</TabsTrigger>
        <TabsTrigger value="squares">Squares</TabsTrigger>
      </TabsList>
      <TabsContent value="circles">Circles</TabsContent>
      <TabsContent value="triangles">Triangles</TabsContent>
      <TabsContent value="squares">Squares</TabsContent>
    </Tabs>
  );
}
```
