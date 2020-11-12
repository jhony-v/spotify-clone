import BaseLabel from "../BaseLabel";
import Wrapper from "../Wrappers/Wrapper";

const TextParagraph = ({ title, detail }) => {
  return (
    <Wrapper>
      <Wrapper mb={3}>
        <BaseLabel fontWeight="bold">{title}</BaseLabel>
      </Wrapper>
      <BaseLabel color="text.smooth" fontSize="9">
        {detail}
      </BaseLabel>
    </Wrapper>
  );
};

export default TextParagraph;
