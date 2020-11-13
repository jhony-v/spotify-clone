import styled from "@emotion/styled";
import BaseCard from "@spf-components/common/BaseCard";
import BaseImage from "@spf-components/common/BaseImage";
import { motion } from "framer-motion";

export const S = {};
S.MusicCard = styled(BaseCard)`
  padding: 15px;
  width: 200px;
  height: 290px;
  cursor:pointer;
  ${BaseImage} {
    width: 100%;
    height: 180px;
    border-radius: 2px;
  }
`;

S.ImageWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

S.WrapperButtonPlayer = styled(motion.div)`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

S.WrapperButtonPlayer.defaultProps = {
  variants: {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  },
  initial: "hidden",
  animate : "visible",
  exit:"hidden"
};
