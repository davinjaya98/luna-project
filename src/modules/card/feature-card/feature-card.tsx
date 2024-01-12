import type { FC } from "react";

import classNames from "classnames";
import { Card, type CardProps } from "react-bootstrap";

import "./feature-card.scss";

const ReactCard: FC<CardProps> = ({ className, ...props }) => (
  <Card className={classNames("feature-card", className)} {...props} />
);

export default ReactCard;
