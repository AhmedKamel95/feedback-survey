import { SyntheticEvent, ReactNode } from 'react'
import styles from './button.module.css'
import classnames from 'classnames'

type Props = {
  children: ReactNode
  secondary?: boolean
  tertiary?: boolean
  disabled?: boolean
  visible?: boolean
  onClick: (se: SyntheticEvent) => void
}

const Button = (props: Props) => {
  const { children, secondary, tertiary, disabled, visible, onClick } = props

  return (
    <button
      style={{
        visibility: visible ? 'hidden' : 'visible',
      }}
      className={classnames(styles.button, {
        [styles.secondaryButton]: secondary,
        [styles.tertiaryButton]: tertiary,
        [styles.disabledButton]: disabled,
      })}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </button>
  )
}

export default Button
