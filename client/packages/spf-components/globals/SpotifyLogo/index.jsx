import { css } from "@emotion/react";
import BaseLabel from "@spf-components/common/BaseLabel";
import FlexWrapper from "@spf-components/common/Wrappers/FlexWrapper";
import { FaSpotify } from "react-icons/fa";

const SpotifyLogo = () => {
  return (
    <FlexWrapper alignItems="center">
      <FaSpotify color="white" size={40} />
      <BaseLabel
        fontWeight="bold"
        fontSize={7}
        css={css({
          marginLeft: "6px",
        })}
      >
        Spotify
      </BaseLabel>
    </FlexWrapper>
  );
};

export default SpotifyLogo;
