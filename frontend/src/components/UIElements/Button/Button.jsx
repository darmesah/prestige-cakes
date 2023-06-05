import classes from "./Button.module.css";

const Button = ({
  children,
  primary,
  secondary,
  third,
  outline,
  tetiary,
  large,
  medium,
  small,
  rounded,
  semi_rounded,
  className,
}) => {
  return (
    <button
      className={`${className} ${classes.button} ${
        primary && classes.primary
      } ${secondary && classes.secondary} ${third && classes.third} ${
        outline && classes.outline
      } ${tetiary && classes.tetiary} ${large && classes.large} ${
        medium && classes.medium
      } ${small && classes.small} ${rounded && classes.rounded} ${
        semi_rounded && classes.semi_rounded
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
