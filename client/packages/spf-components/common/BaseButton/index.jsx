import styled from "@emotion/styled";
import { variant } from "styled-system";

const BaseButton = styled.button`
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  ${variant({
    variants: {
      primary: {
        color: "text.primary",
        bg: "primary",
      },
      outline: {
        border: "primary",
      },
      disabled: {
        bg: "darkAlpha.4",
      },
    },
  })}
`;
BaseButton.defaultProps = {
  variant: "primary",
};

export default BaseButton;
