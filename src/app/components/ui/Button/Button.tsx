import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.styles.module.scss'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Вид кнопки
   */
  kind: 'Primary'
  /**
   * Кастомные классы
   */
  className?: string
  /**
   * Тип кнопки
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Содержимое кнопки
   */
  children?: ReactNode
  /**
   * Отключение кнопки
   */
  disabled?: boolean
  /**
   * Обработчик клика по кнопке
   */
  onClick?: () => void
}

export const Button: FC<IButtonProps> = ({
  kind = 'Primary',
  className,
  children,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) => {
  const buttonClassName: string = cn(
    styles.Button,
    styles[`Button_${kind}`],
    className,
  )

  return (
    <button
      {...rest}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}