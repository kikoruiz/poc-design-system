import { cva } from 'class-variance-authority'
import { List, TabsListProps } from '@radix-ui/react-tabs'

export const styles = cva(['flex', 'min-w-full', 'rounded-t-s', 'shadow-normal'])

export function TabsList({
  children,
  asChild = false,
  loop = true,
  ...rest
}: TabsListProps) {
  const defaultRadixValues = {
    asChild,
    loop,
  }

  return (
    <List className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </List>
  )
}

TabsList.displayName = TabsList.name
