import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Image } from "src/components/Image";

interface Props {
  className?: string;
}

const PhotoHalf: React.SFC<Props> = ({ className }) => {
  const { img } = useStaticQuery(graphql`
    query PhotoHalfQuery {
      img: file(relativePath: { eq: "profile-half.png" }) {
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
      imgStyle={{ objectFit: "contain", objectPosition: "100% 0%" }}
      image={img}
    />
  );
};

export { PhotoHalf };
