import * as React from "react";
import GatsbyImage from "gatsby-image";

interface ImgProps {
  image?: {
    childImageSharp?: {
      fixed?: any;
      fluid?: any;
    };
    publicUrl?: string;
  };
  className?: string;
  style?: object;
  critical?: boolean;
  fadeIn?: boolean;
  imgStyle?: any;
}

const Image: React.SFC<ImgProps> = (
  { image, className, critical, imgStyle, fadeIn, style },
  ...props
) => {
  const url =
    !!image && !!image.publicUrl ? image.publicUrl : require("./default.jpg");
  if (!!image && !!image.childImageSharp) {
    const { fluid, fixed } = image.childImageSharp;
    return (
      <GatsbyImage
        style={style}
        critical={critical}
        fadeIn={fadeIn}
        fluid={!!fluid && fluid}
        fixed={!!fixed && fixed}
        className={className}
        imgStyle={imgStyle}
        {...props}
      />
    );
  }
  return (
    <div
      style={{
        background: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        ...style,
      }}
      className={className}
    />
  );
};

export { Image };
