import { Stack } from '@components/stack'
import { ReactLiveBlock } from '@devtools/ReactLiveBlock'

import { Button } from '../src/'

export const Variants = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end" gap="m">
      <Button intent="primary">primary button</Button>
      <Button intent="secondary">secondary button</Button>
    </Stack>
  </ReactLiveBlock>
)

export const Sizes = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end" gap="m">
      <Button size="small">small button</Button>
      <Button size="medium">medium button</Button>
      <Button size="large">large button</Button>
    </Stack>
  </ReactLiveBlock>
)
