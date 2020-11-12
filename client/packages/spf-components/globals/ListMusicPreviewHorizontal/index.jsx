import BaseLabel from "@spf-components/common/BaseLabel";
import TextParagraph from "@spf-components/common/TextParagraph";
import FlexWrapper from "@spf-components/common/Wrappers/FlexWrapper";
import GridWrapper from "@spf-components/common/Wrappers/GridWrapper";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";

const ListMusicPreviewHorizontal = ({
  children,
  title,
  description,
  viewMore,
  gridOptions
}) => {
  return (
    <Wrapper>
      <FlexWrapper alignItems="center">
        <TextParagraph title={title} detail={description} titleSize={8} />
        {viewMore && (
          <Wrapper ml="auto">
            <BaseLabel color="text.smooth" fontWeight="bold" fontSize={5}>SEE ALL</BaseLabel>
          </Wrapper>
        )}
      </FlexWrapper>
      <Wrapper mt={3}>
          <GridWrapper {...gridOptions}>
              {children}
          </GridWrapper>
        </Wrapper>
    </Wrapper>
  );
};

export default ListMusicPreviewHorizontal;
