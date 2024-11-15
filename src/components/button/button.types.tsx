export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    icon?: React.ElementType;
    iconStyle?: string;
}

export interface FileButtonProps extends ButtonProps {
    id: string;
}