import './Button.styles.css'

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { buttonVariants, ButtonVariantsProps } from './Button.variants'

interface Props extends ButtonVariantsProps, ComponentPropsWithoutRef<'button'> {
  disabled?: boolean
}

export function Button({
  color = 'gray',
  children,
  disabled = false,
  intent = 'primary',
  size = 'small',
  ...rest
}: PropsWithChildren<Props>) {
  const buttonHtmlProps = { ...rest, disabled }

  return (
    <button
      className={buttonVariants({
        intent,
        size,
        disabled: !!disabled,
      })}
      {...buttonHtmlProps}
    >
      {children}
    </button>
  )
}
