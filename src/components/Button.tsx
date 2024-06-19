import { buttonProps } from "@/types";
import React from "react";

const Button = ({ text, type }: buttonProps) => {
  return <button className={`${type} btn`}>{text}</button>;
};

export default Button;
