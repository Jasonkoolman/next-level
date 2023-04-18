# Toast

MultiPart component

```tsx
export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Title',
          description: 'Description',
          action: <ToastAction altText="Action">Action</ToastAction>,
        });
      }}
    >
      Trigger
    </Button>
  );
}
```
