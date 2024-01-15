import type { FC } from "react";

import classNames from "classnames";
import { Button, type ButtonProps } from "react-bootstrap";

import "./circle-button.scss";

const CircleButton: FC<ButtonProps> = ({ className, ...props }) => (
  <Button className={classNames("circle", className)} {...props}>
    {
      <span>
        <img src="/assets/arrow-left-white.svg" />
      </span>
    }
  </Button>
);

export default CircleButton;
