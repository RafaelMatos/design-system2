import { ComponentProps } from 'react'
import { Input, Prefixe, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefixe>{prefix}</Prefixe>}
      <Input {...props} />
    </TextInputContainer>
  )
}
