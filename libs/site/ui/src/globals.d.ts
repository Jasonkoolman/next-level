/* eslint-disable @typescript-eslint/ban-types */
type ForwardedNamedComponent<T, P = {}> = {
  (props: P & React.RefAttributes<T>): React.ReactElement | null;
  displayName?: string;
};

declare module 'react' {
  // Redeclare the forwardRef function to accept a generic type
  // for the props argument.
  // @see https://fettblog.eu/typescript-react-generic-forward-refs/

  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): ForwardedNamedComponent<T, P>;
}

export {};
