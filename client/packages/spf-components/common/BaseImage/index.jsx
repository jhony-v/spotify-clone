import styled from "@emotion/styled";
import { variant, compose, layout } from "styled-system";

const BaseImage = styled.img`
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
