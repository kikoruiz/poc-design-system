import { TabsTriggerProps, Trigger } from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva(['spark-TabsTrigger'])

interface Props extends TabsTriggerProps {
  disabled?: boolean
}

export function TabsTrigger({ children, asChild = false, disabled = false, ...rest }: Props) {
  const defaultRadixValues = {
    asChild,
    disabled,
  }

  return (
    <Trigger className="bg-bg-primary-subtle" {...defaultRadixValues} {...rest}>
      {children}
    </Trigger>
  )
}

TabsTrigger.displayName = TabsTrigger.name
