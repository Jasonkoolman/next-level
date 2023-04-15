# Tabs

```tsx
export function TabsDemo() {
  return (
    <Tabs.Root defaultValue="circles" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="circles">Circles</TabsTrigger>
        <Tabs.Trigger value="triangles">Triangles</TabsTrigger>
        <Tabs.Trigger value="squares">Squares</TabsTrigger>
      </Tabs.List>
      <Tabs.Content value="circles">
        Circles
      </Tabs.Content>
      <Tabs.Content value="triangles">
        Triangles
      </Tabs.Content>
      <Tabs.Content value="squares">
        Squares
      </Tabs.Content>
    </Tabs.Root>
  )
}
```
