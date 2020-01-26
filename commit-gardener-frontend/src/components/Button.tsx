import React from "react";

interface IProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  label: string;
}

const Button: React.FC<IProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export { Button };
