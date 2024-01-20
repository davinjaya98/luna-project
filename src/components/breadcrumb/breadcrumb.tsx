import { breadcrumbLinks } from "@utils/nav";
import classNames from "classnames";
import { useMemo } from "react";
import { Breadcrumb as BSBreadcrumb } from "react-bootstrap";

export const Breadcrumb = () => {
  const { pathname } = window.location;

  const activeIndex = useMemo(
    () => breadcrumbLinks.findIndex(({ link }) => pathname === link),
    [pathname]
  );

  return (
    <BSBreadcrumb as="div">
      {breadcrumbLinks.map(({ text, link }, index) => (
        <BSBreadcrumb.Item
          href={link}
          key={text}
          className={classNames({ active: index <= activeIndex })}
        >
          {text}
        </BSBreadcrumb.Item>
      ))}
    </BSBreadcrumb>
  );
};
