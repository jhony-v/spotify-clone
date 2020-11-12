import { memo, useState } from "react";
import BaseImage from "@spf-components/common/BaseImage";
import TextParagraph from "@spf-components/common/TextParagraph";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import ButtonPlayerAnimatable from "./Atoms/ButtonPlayerAnimatable";
import { S } from "./Atoms/elements";

const MusicPrimaryCard = ({ image, title, detail }) => {
  const [open, setOpen] = useState(false);
  return (
    <S.MusicCard
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Wrapper flexDirection="column">
        <S.ImageWrapper>
          <BaseImage src={image} />
          <ButtonPlayerAnimatable open={open} />
        </S.ImageWrapper>
        <TextParagraph title={title} detail={detail} />
      </Wrapper>
    </S.MusicCard>
  );
};
export default memo(MusicPrimaryCard);
