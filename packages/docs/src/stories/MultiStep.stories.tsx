import type { StoryObj, Meta } from '@storybook/react'

import { MultiStep, MultiStepProps, Text, Box } from '@ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 2,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>
export const Primary: StoryObj<MultiStepProps> = {}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 3,
  },
}
