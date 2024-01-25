import type { FC } from "react";
import { Container, Stack, Image } from "react-bootstrap";
import type { ProfileActionItemProps } from "./type";

import classNames from "classnames";

const ProfileActionItem: FC<ProfileActionItemProps> = ({
  className,
  ...props
}) => {
  return (
    <Container
      as="a"
      href={props.link}
      className={classNames("text-decoration-none")}
    >
      <Stack
        direction="horizontal"
        gap={1}
        className={classNames(
          className,
          "align-items-center",
          "justify-content-between"
        )}
        {...props}
      >
        <p>{props.text}</p>
        <Image
          src="./assets/arrow-right-primary.svg"
          alt="arrow-right-primary"
        ></Image>
      </Stack>
    </Container>
  );
};

export default ProfileActionItem;
