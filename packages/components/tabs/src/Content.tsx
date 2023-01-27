import { Content, TabsContentProps } from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva(['spark-TabsContent'])

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
