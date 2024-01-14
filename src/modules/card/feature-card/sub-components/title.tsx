import classNames from "classnames";
import type { FC } from "react";
import { Card } from "react-bootstrap";
import type { FeatureCardTitleProps } from "../type";

export const FeatureCardTitle: FC<FeatureCardTitleProps> = ({
  className,
  ...props
}) => (
  <Card.Title
    as="a"
    {...props}
    className={classNames(className, "stretched-link")}
  />
);
