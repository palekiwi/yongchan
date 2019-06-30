import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "src/components/SEO";

export interface Props {
  data: {
    site: {
      siteMetadata: {
        contact: {
          email: string;
        };
      };
    };
  };
}

const ContactPage: React.SFC<Props> = ({ data }) => {
  return (
    <>
      <SEO title="contact" />
      <p>{data.site.siteMetadata.contact.email}</p>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        contact {
          email
        }
      }
    }
  }
`;
