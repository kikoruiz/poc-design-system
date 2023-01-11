import { Stack } from '@components/Stack'
import { ReactLiveBlock } from '@devtools/ReactLiveBlock'

import { Button } from './Button'

export const variants = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button intent="primary">primary button</Button>
      <Button intent="secondary">secondary button</Button>
    </Stack>
  </ReactLiveBlock>
)

export const sizes = () => (
  <ReactLiveBlock scope={{ Button, Stack }}>
    <Stack alignItems="end">
      <Button size="small">small button</Button>
      <Button size="medium">medium button</Button>
      <Button size="large">large button</Button>
    </Stack>
  </ReactLiveBlock>
)
