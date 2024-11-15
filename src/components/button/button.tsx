import { ButtonProps } from "./button.types";

export const Button = ({ label, onClick, disabled, className }: ButtonProps) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}