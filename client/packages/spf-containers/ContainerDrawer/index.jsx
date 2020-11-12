import RootLayoutNavigator from "@spf-components/globals/RootLayoutNavigator";
import ContainerNavBarNavigator from "@spf-containers/ContainerNavBarNavigator";
import ContainerNowPlayingMusic from "@spf-containers/ContainerNowPlayingMusic";

const ContainerDrawer = ({ children }) => {
  return (
    <RootLayoutNavigator
      navBar={<ContainerNavBarNavigator />}
      footer={<ContainerNowPlayingMusic />}
    >
      {children}
    </RootLayoutNavigator>
  );
};

export default ContainerDrawer;
