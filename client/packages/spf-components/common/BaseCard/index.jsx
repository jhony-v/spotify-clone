import styled from "@emotion/styled";
import { variant } from "styled-system";

const BaseCard = styled.div`
  border-radius: 5px;
  transition: background 200ms;
  position: relative;
  &:hover {
    background: ${(props) => props.theme.colors.darkAlpha[4]};
  }
  ${variant({
    variants: {
      default: {
        bg: "darkAlpha.5",
      },
      outline: {
        border: "lightAlpha.0",
      },
    },
  })}
`;
BaseCard.defaultProps = {
  variant: "default",
};

export default BaseCard;
