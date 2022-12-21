import { StoryFn, Meta } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  }
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: ''
}
