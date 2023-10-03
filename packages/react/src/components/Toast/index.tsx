import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X size={20} weight="bold" />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
