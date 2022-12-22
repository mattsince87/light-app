import { StoryFn, Meta } from '@storybook/react'
import { Stack } from './Stack'

export default {
  title: 'Molecules/Stack',
  component: Stack,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  }
} as Meta<typeof Stack>

const Template: StoryFn<typeof Stack> = args => <Stack {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}
