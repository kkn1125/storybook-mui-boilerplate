import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  color?:
    | "primary"
    | "info"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  variant: "text" | "contained" | "outlined";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <MuiButton
      variant={props.variant || "outlined"}
      size={props.size || "medium"}
      color={props.primary ? "primary" : props.color || "info"}
      onClick={props.onClick}>
      {props.label || "button"}
    </MuiButton>
  );
}

export default Button;
