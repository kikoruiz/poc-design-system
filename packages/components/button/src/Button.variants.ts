import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(['spark-Button'], {
  variants: {
    disabled: {
      true: ['is-disabled'],
    },
    intent: {
      primary: ['spark-Button--primary'],
      secondary: ['spark-Button--secondary'],
    },
    size: {
      small: ['spark-Button--small'],
      medium: ['spark-Button--medium'],
      large: ['spark-Button--large'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'small',
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'small',
      disabled: true,
      className: 'spark-Button--variantOne',
    },
  ],
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
