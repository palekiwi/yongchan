import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Image } from "src/components/Image";

interface Props {
  className?: string;
}

const PhotoWhole: React.SFC<Props> = ({ className }) => {
  const { img } = useStaticQuery(graphql`
    query PhotoWholeQuery {
      img: file(relativePath: { eq: "profile-whole.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Image
      className={className}
      imgStyle={{ objectPosition: "100% 0%" }}
      image={img}
    />
  );
};

export { PhotoWhole };
