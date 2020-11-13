import BaseLabel from "@spf-components/common/BaseLabel";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import ItemPlaylist from "./Molecules/ItemPlaylist";
import faker from "faker";
import BaseButton from "@spf-components/common/BaseButton";

const PlaylistCreated = () => {
  return (
    <Wrapper>
      <Wrapper mb={2}>
        <BaseLabel fontWeight="bold" fontSize={6}>
          PLAYLISTS
        </BaseLabel>
      </Wrapper>
      <Wrapper>
          <Wrapper my={4}>
              <BaseButton variant="outline" fontSize={4}>Create playlist</BaseButton>
          </Wrapper>
          {Array(3).fill(0).map((e,i)=>(
              <ItemPlaylist key={i} image={faker.random.image()} text={faker.name.findName()}  />
          ))}
      </Wrapper>
    </Wrapper>
  );
};

export default PlaylistCreated;
