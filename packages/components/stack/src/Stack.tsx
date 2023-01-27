import './Stack.styles.css'

import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

const stack = cva(['spark-Stack'], {
  variants: {
    flexDirection: {
      row: ['spark-Stack--row'],
      column: ['spark-Stack--col'],
    },
    alignItems: {
      start: ['spark-Stack--itemsStart'],
      center: ['spark-Stack--itemsCenter'],
      end: ['spark-Stack--itemsEnd'],
    },
    justifyContent: {
      start: ['spark-Stack--justifyStart'],
      center: ['spark-Stack--justifyCenter'],
      end: ['spark-Stack--justifyEnd'],
    },
    gap: {
      s: ['spark-Stack--gapSmall'],
      m: ['spark-Stack--gapMedium'],
      l: ['spark-Stack--gapLarge'],
    },
  },
  defaultVariants: {
    flexDirection: 'row',
    gap: 's',
  },
})

type CVAProps = VariantProps<typeof stack>

export function Stack({
  children,
  alignItems,
  flexDirection,
  justifyContent,
  gap,
  ...rest
}: Omit<ComponentPropsWithoutRef<'div'>, 'className'> & CVAProps) {
  return (
    <div
      className={stack({
        alignItems,
        flexDirection,
        justifyContent,
        gap,
      })}
      {...rest}
    >
      {children}
    </div>
  )
}
