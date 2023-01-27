import { List, TabsListProps } from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva(['spark-TabsList'])

export function TabsList({ children, asChild = false, loop = true, ...rest }: TabsListProps) {
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
