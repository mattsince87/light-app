import { StoryFn, Meta } from '@storybook/react'
import { Pagination } from './Pagination'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  }
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = args => <Pagination {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}
