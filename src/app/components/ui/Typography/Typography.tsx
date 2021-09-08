import React, { FC, ReactNode, ReactElement, HTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Typography.styles.module.scss'

export interface IHeading extends HTMLAttributes<HTMLElement> {
  /**
   * Текст заголовка
   */
  title?: string
  /**
   * (или) Содержимое заголовка
   */
  children?: ReactNode
  /**
   * Кастомные классы
   */
  className?: string
  /**
   * Значене атрибута "title"
   */
  htmlTitle?: string
}

interface ITypographyElements {
  H1: (props: IHeading) => ReactElement
  H2: (props: IHeading) => ReactElement
  H3: (props: IHeading) => ReactElement
  H4: (props: IHeading) => ReactElement
}

export const Typography: FC<{ children?: ReactNode }> &
  ITypographyElements = ({ children }) => <>{children}</>

// eslint-disable-next-line react/display-name
Typography.H1 = ({
  title: text,
  htmlTitle,
  className,
  children,
  ...rest
}: IHeading): ReactElement => (
  <h1 {...rest} className={cn(styles.H1, className)} title={htmlTitle}>
    {text ? <>{text}</> : <>{children}</>}
  </h1>
)

// eslint-disable-next-line react/display-name
Typography.H2 = ({
  title: text,
  htmlTitle,
  className,
  children,
  ...rest
}: IHeading): ReactElement => (
  <h2 {...rest} className={cn(styles.H2, className)} title={htmlTitle}>
    {text ? <>{text}</> : <>{children}</>}
  </h2>
)

// eslint-disable-next-line react/display-name
Typography.H3 = ({
  title: text,
  htmlTitle,
  className,
  children,
  ...rest
}: IHeading): ReactElement => (
  <h3 {...rest} className={cn(styles.H3, className)} title={htmlTitle}>
    {text ? <>{text}</> : <>{children}</>}
  </h3>
)

// eslint-disable-next-line react/display-name
Typography.H4 = ({
  title: text,
  htmlTitle,
  className,
  children,
  ...rest
}: IHeading): ReactElement => (
  <h4 {...rest} className={cn(styles.H4, className)} title={htmlTitle}>
    {text ? <>{text}</> : <>{children}</>}
  </h4>
)
