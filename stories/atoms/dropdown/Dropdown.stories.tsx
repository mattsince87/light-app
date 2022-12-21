import { StoryFn, Meta } from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  }
} as Meta<typeof Dropdown>

const Template: StoryFn<typeof Dropdown> = args => <Dropdown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}
