import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <>
    <button {...props} className={"box " + props.className}>
      {children}
    </button>

    <style jsx>
      {`
        button {
          padding: 0.25rem 0.5rem;
          background: rgb(255, 200, 55);
          border: 1px solid black;
          width: 100%;
        }
        button:active {
          background: rgb(184, 143, 41);
        }
      `}
    </style>
  </>
);

export default Button;
