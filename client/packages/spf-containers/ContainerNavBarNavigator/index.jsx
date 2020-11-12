import { MdHome } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import RowLinkItem from "./components/RowLinkItem";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import SpotifyLogo from "@spf-components/globals/SpotifyLogo";

const ContainerNavBarNavigator = () => {
  return (
    <Wrapper p={2}>
      <Wrapper m={3}>
        <SpotifyLogo/>
      </Wrapper>
      <RowLinkItem icon={MdHome} text="Home" href="/" />
      <RowLinkItem icon={FiSearch} text="Search" href="/search" />
      <RowLinkItem icon={VscLibrary} text="Library" href="/library" />
    </Wrapper>
  );
};

export default ContainerNavBarNavigator;
