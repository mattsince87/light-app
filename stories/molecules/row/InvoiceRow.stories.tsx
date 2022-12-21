import { StoryFn, Meta } from '@storybook/react'
import { InvoiceRow } from './InvoiceRow'

export default {
  title: 'Molecules/Invoice Row',
  component: InvoiceRow,
  parameters: {
    backgrounds: {
      default: 'site',
      values: [{ name: 'site', value: '#F0F3FF' }]
    }
  }
} as Meta<typeof InvoiceRow>

const Template: StoryFn<typeof InvoiceRow> = args => <InvoiceRow {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}
