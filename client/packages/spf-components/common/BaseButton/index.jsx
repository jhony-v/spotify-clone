import styled from "@emotion/styled";
import { fontSize, variant } from "styled-system";

const BaseButton = styled.button`
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  ${variant({
    variants: {
      primary: {
        color: "text.primary",
        bg: "primary",
      },
      outline: {
        color: "primary",
        border: "primary",
      },
      disabled: {
        color: "text.primary",
        bg: "darkAlpha.4",
      },
    },
  })}
  ${fontSize};
`;
BaseButton.defaultProps = {
  variant: "primary",
  fontSize: "1rem",
};

export default BaseButton;
