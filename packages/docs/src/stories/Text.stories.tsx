import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, labore consectetur. Possimus labore, ab necessitatibus, obcaecati quidem dolorem soluta exercitationem, debitis magnam tenetur ea? Libero distinctio architecto laudantium nemo quis.',
  },
} as Meta<TextProps>
export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
