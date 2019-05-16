import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled, { css } from "styled-components";
import { color, weight } from "src/theme";

export interface BaseLinkProps {
  to: string;
  className?: string;
}

export const BaseLink: React.SFC<BaseLinkProps> = ({
  to,
  children,
  ...rest
}) => {
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  if (internal && !file) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};

interface Props {
  to: string;
  styled?: boolean;
  onClick?(): void;
}

export const Link = styled(({ styled, ...props }) => <BaseLink {...props} />)<
  Props
>`
  text-decoration: none;
  ${props =>
    props.styled &&
    css`
      font-weight: ${weight("bold")};
      color: ${color("text.dark")};
      &:hover {
        color: ${color("text.light")};
      }
    `};
`;
