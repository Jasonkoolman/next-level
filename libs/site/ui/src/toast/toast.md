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
          action: <Toast.Action altText="Action">Action</Toast.Action>,
        });
      }}
    >
      Trigger
    </Button>
  );
}
```
