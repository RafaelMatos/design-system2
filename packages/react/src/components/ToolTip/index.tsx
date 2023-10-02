import { ComponentProps, ReactNode } from 'react'
import {
  ToolTipContent,
  TooltipArrow,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'
import { Text } from '../Text'

export interface ToolTipProps extends ComponentProps<typeof TooltipRoot> {
  content: string | ReactNode
}

export function ToolTip({ children, content, ...props }: ToolTipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>
          {children || <Text>Your tooltip</Text>}
        </TooltipTrigger>
        <TooltipPortal>
          <ToolTipContent side="top">
            <Text size="sm">{content}</Text>
            <TooltipArrow />
          </ToolTipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

ToolTip.displayName = 'Tooltip'
