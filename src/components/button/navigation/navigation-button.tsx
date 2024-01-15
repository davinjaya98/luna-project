import type { FC } from "react";

import classNames from "classnames";
import { Button, type ButtonProps } from "react-bootstrap";

import "./navigation-button.scss";

const NavigationButton: FC<ButtonProps> = ({ className, ...props }) => (
  <Button className={classNames("navigation", className)} {...props}></Button>
);

export default NavigationButton;
