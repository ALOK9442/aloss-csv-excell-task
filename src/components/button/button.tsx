import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
  icon: Icon,
  iconStyle,
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
      {Icon && <Icon className={`${iconStyle}`} />}
    </button>
  );
};
