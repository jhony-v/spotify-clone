import styled from "@emotion/styled";
import { variant, compose } from "styled-system";

const BaseImage = styled.image`
  display: block;
  object-fit: cover;
  ${variant({
    prop: "radius",
    variants: {
      small: {
        borderRadius: 10,
      },
      medium: {
        borderRadius: 20,
      },
      full: {
        borderRadius: "100%",
      },
    },
  })}
  ${compose(layout)}
`;

export default BaseImage;
