import styled from "@emotion/styled";
import { color, compose, typography, variant } from "styled-system";

const BaseLabel = styled.span`
  ${variant({
    variants: {
      disabled: {
        color: "text.smooth",
        userSelect: "none",
      },
      default: {
        color: "text.primary",
      },
    },
  })}
  ${compose(color, typography)};
`;

BaseLabel.defaultProps = {
  variant: "default",
};

export default BaseLabel;
