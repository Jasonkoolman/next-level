'use client';

import { Close, Description, Provider, Root, Title, Viewport } from './toast';
import { useToast } from './use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <Provider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Root key={id} {...props}>
          <div className="grid gap-1">
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </div>
          {action}
          <Close />
        </Root>
      ))}
      <Viewport />
    </Provider>
  );
}
