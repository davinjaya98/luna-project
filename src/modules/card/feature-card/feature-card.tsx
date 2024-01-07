import type { FC } from "react";
import { Card, type CardProps } from "semantic-ui-react";
import classNames from "classnames";

import "./feature-card.less";

const ReactCard: FC<CardProps> = ({ className, ...props }) => (
  <Card className={classNames("feature-card", className)} {...props} />
);

export default ReactCard;
