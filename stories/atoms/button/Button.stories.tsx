import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  },
  argTypes: {
    icon: {
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}
