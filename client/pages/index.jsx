import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import ListMusicPreviewHorizontal from "@spf-components/globals/ListMusicPreviewHorizontal";
import MusicPrimaryCard from "@spf-components/globals/MusicPrimaryCard";
import ContainerDrawer from "@spf-containers/ContainerDrawer";
import faker from "faker";



const ListMusics = () => {
  return(
    <Wrapper my="40px">
      <ListMusicPreviewHorizontal
          title="New music"
          description="This music is created by Maricielo"
          viewMore
          gridOptions={{
            autosize:"200px",
          }}
        >
          {Array(5).fill(0).map((e,i)=>(
            <MusicPrimaryCard title={faker.name.lastName()} detail={faker.name.firstName() + " " + faker.name.lastName()} image={faker.random.image()} />
          ))}
        </ListMusicPreviewHorizontal>
    </Wrapper>
  )
}

export default function Index() {
  return (
    <ContainerDrawer>
      <Wrapper mt="100px">
        <Wrapper m="auto" width="95%">
        <ListMusics/>
        <ListMusics/>
        <ListMusics/>
        </Wrapper>
      </Wrapper>
    </ContainerDrawer>
  );
}
