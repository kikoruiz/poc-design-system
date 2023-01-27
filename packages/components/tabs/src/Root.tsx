import './Root.styles.css'

import { Root, TabsProps } from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

export const styles = cva(['spark-TabsRoot'])

export function TabsRoot({
  children,
  asChild = false,
  orientation = 'horizontal',
  activationMode = 'automatic',
  ...rest
}: PropsWithChildren<TabsProps>) {
  const defaultRadixValues = {
    asChild,
    orientation,
    activationMode,
  }

  return (
    <Root className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </Root>
  )
}

TabsRoot.displayName = TabsRoot.name
