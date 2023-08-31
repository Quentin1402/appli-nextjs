import classNames from "classnames"
import { ButtonProps } from "../type/types"
import { className, variants, sizes } from "./StyleButton"

const Button = (props: ButtonProps) => {
  const { variant, size, ...otherProps }: any = props
  
  return (
    <button
      {...otherProps}
      
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Button
