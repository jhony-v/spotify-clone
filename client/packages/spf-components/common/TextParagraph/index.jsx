import { memo } from "react";
import BaseLabel from "../BaseLabel";
import Wrapper from "../Wrappers/Wrapper";

const TextParagraph = ({ title, detail, titleSize }) => {
  return (
    <Wrapper>
      <Wrapper mb={2}>
        <BaseLabel fontWeight="bold" fontSize={titleSize}>{title}</BaseLabel>
      </Wrapper>
      <BaseLabel color="text.smooth" fontSize={6}>
        {detail}
      </BaseLabel>
    </Wrapper>
  );
};

export default memo(TextParagraph);
