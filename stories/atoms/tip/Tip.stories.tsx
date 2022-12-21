import { StoryFn, Meta } from '@storybook/react'
import { Tip } from './Tip'

export default {
  title: 'Atoms/Tip',
  component: Tip,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  }
} as Meta<typeof Tip>

const Template: StoryFn<typeof Tip> = args => <Tip {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus, eius animi consequatur nesciunt possimus itaque cumque nostrum dolorem aliquid et assumenda facilis! Ipsum possimus itaque, dignissimos dolorum labore facere.`
}
