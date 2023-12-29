import type { FC } from "react";
import { Button as SemanticButton, type ButtonProps } from "semantic-ui-react";

import "./button.less";

const Button: FC<ButtonProps> = (props) => <SemanticButton {...props} />;

export default Button;
