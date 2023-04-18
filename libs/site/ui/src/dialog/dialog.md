# Dialog

Multipart component

```tsx
export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Title</Dialog.Title>
          <DialogDescription>Description</Dialog.Description>
        </DialogHeader>
        <div className="grid gap-4 py-4">Paragraph</div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```
