import React from "react";

interface Props {
  width: string;
  height: string;
  bgColor: string;
  color: string;
  text: string;
  onClick?: () => void;
}

export default function Button({
  width,
  height,
  bgColor,
  color,
  text,
  onClick,
}: Props) {
  return (
    <button
      style={{
        width: width,
        height: height,
        color: color,
        backgroundColor: bgColor,
      }}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
}
