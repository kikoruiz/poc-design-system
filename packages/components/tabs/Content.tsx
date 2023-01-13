import { cva } from 'class-variance-authority'
import { TabsContentProps, Content } from '@radix-ui/react-tabs'

export const styles = cva([
  'rounded-b-lg',
  'bg-white',
  'p-m',
  'shadow-normal',
  'rounded-b-s',
])

export function TabsContent({ children, asChild = false, ...rest }: TabsContentProps) {
  const defaultRadixValues = {
    asChild,
  }

  return (
    <Content className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </Content>
  )
}

TabsContent.displayName = TabsContent.name
