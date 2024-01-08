// index.d.ts
import React, { HTMLAttributes } from 'react';

declare module "designbluero" {
  interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    // Add any additional props specific to your Button component
  }

  interface InputProps extends HTMLAttributes<HTMLInputElement> {
    // Add any additional props specific to your Input component
  }

  const Button: React.FC<ButtonProps>;
  const Input: React.FC<InputProps>;

  export { Button, Input };
}
