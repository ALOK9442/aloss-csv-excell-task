import { FaFile } from "react-icons/fa";
import { Button } from "./button";
import React from "react";
import { ButtonProps, FileButtonProps } from "./button.types";

export const FileButton: React.FC<FileButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
  icon: Icon,
  iconStyle,
  id,
}: FileButtonProps) => {
  const handleClick = () => {
    if (label === "Upload File") {
      const fileInput = document.getElementById(id);
      fileInput?.click();
    } else {
      onClick();
    }
  };
  return (
    <>
      <Button
        label={label}
        disabled={disabled || false}
        onClick={handleClick}
        className={`w-fit p-2 bg-white flex items-center justify-around border-2 border-gray-300 rounded-md cursor-pointer
             ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        icon={Icon}
      />
      <input
        type={label === "Upload File" ? "file" : "hidden"}
        className="hidden"
        id={id}
        accept=".csv,.xlsx,.xls,.xlsm"
      />
    </>
  );
};
