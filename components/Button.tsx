import { FunctionalComponent, JSX } from "preact/src/index.d.ts";


type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
    variant: "primary" | "secondary";
}


const Button: FunctionalComponent<ButtonProps> = (props) => {

  const { variant, children, ...rest } = props;
  return (
    <button class={`button ${variant}`} {...rest}>
        {children}
    </button>
  )
}

export default Button;