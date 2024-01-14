import { breadcrumbLinks } from "@utils/nav";
import { Breadcrumb as BSBreadcrumb } from "react-bootstrap";

export const Breadcrumb = () => (
  <BSBreadcrumb as="div">
    {breadcrumbLinks.map(({ text, link }) => (
      <BSBreadcrumb.Item href={link}>{text}</BSBreadcrumb.Item>
    ))}
  </BSBreadcrumb>
);
