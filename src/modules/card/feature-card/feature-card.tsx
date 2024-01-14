import type { FC } from "react";

import classNames from "classnames";
import { Card, type CardProps } from "react-bootstrap";
import { FeatureCardTitle } from "./sub-components/title";

import "./feature-card.scss";

const FeatureCard: FC<CardProps> = ({ className, ...props }) => (
  <Card className={classNames("feature-card p-4", className)} {...props} />
);

export default Object.assign(FeatureCard, {
  Title: FeatureCardTitle,
});
