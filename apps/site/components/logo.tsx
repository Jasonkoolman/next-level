type LogoProps = React.HTMLAttributes<SVGElement>;

export function Logo(props: LogoProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="currentColor"
      {...props}
    >
      <path d="M44 27L25 8H8L56 56V8H44V27Z" />
      <path d="M33 48H16V31L33 48Z" />
    </svg>
  );
}
