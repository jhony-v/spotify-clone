import styled from "@emotion/styled";
import { color, compose, typography, variant } from "styled-system";

const NativeLabel = styled.span`
  ${variant({
      variants : {
          disabled: {
            color: "text.smooth",
            userSelect: "none",
          },
          default : {
              color : "text.primary"
          }
      },
  })}
  ${compose(color, typography)};
`;

NativeLabel.defaultProps = {
    variant : "default"
}

export default NativeLabel;
