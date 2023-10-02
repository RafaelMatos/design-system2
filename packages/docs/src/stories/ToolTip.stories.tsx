import type { StoryObj, Meta } from '@storybook/react'

import { ToolTip, ToolTipProps, Button, Box } from '@rm-ignite-ui/react'

export default {
  title: 'Data display/ToolTip',
  component: ToolTip,
  args: {
    children: <Button size="sm">Show tooltip</Button>,
    content: 'Tooltip content',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '$2',
            width: '$40',
            height: '$40',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToolTipProps>
export const Primary: StoryObj<ToolTipProps> = {
  args: {
    content: '21 de Outubro - Indisponível',
  },
}
