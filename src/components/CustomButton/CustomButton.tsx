import React from "react";

export const CustomButton = ({
  title,
  disabled = false,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const buttonStyle = {
    backgroundColor: disabled ? "#B8B8B8" : "#F2890F",
  };
  return (
    <button
      className="w-[255px] h-[65px] text-[17px] text-_FFFFFF rounded-[65px]"
      style={buttonStyle}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
