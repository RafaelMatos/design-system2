import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  fontFamily: '$default',
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '$2',
  fontWeight: '$bold',
  color: '$gray100',
  fontSize: '$xl',
  fontFamily: '$default',
  lineHeight: '$base',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

const VIEWPORT_PADDING = 32

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: 'solid 2px $gray600',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3 $4',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  // alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$10',
  right: '$10',
  color: '$gray200',
  cursor: 'pointer',
  backgroundColor: 'transparent',
})
