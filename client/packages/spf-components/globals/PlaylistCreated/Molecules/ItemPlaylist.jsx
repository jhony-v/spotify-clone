import BaseImage from "@spf-components/common/BaseImage";
import BaseLabel from "@spf-components/common/BaseLabel";
import FlexWrapper from "@spf-components/common/Wrappers/FlexWrapper";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";

const ItemPlaylist = ({ image,icon, text, onClick }) => {
  return (
    <Wrapper my={3}>
      <FlexWrapper alignItems="center" onClick={onClick}>
        {icon || <BaseImage size={30} src={image} />}  
        <Wrapper ml={2}>
          <BaseLabel fontSize={5} fontWeight="bold">
            {text}
          </BaseLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default ItemPlaylist;
