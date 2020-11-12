import BaseImage from "@spf-components/common/ImageAvatar";
import TextParagraph from "@spf-components/common/TextParagraph";
import FlexWrapper from "@spf-components/common/Wrappers/FlexWrapper";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";

const MusicPrimaryCard = ({ image, title, detail }) => {
  return (
    <FlexWrapper w={150}>
      <Wrapper mb={5}>
        <BaseImage src={image} size={150} />
      </Wrapper>
      <TextParagraph title={title} detail={detail} />
    </FlexWrapper>
  );
};
export default MusicPrimaryCard;
