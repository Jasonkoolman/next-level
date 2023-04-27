type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export function Main({ children, className }: MainProps) {
  return (
    <main id="content" className={className}>
      {children}
    </main>
  );
}
