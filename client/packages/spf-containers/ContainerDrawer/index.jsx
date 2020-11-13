import BannerGradientSignIn from "@spf-components/globals/BannerGradientSignIn";
import RootLayoutNavigator from "@spf-components/globals/RootLayoutNavigator";
import ContainerNavBarNavigator from "@spf-containers/ContainerNavBarNavigator";

const ContainerDrawer = ({ children,topBar }) => {
  return (
    <RootLayoutNavigator
      navBar={<ContainerNavBarNavigator />}
      footer={<BannerGradientSignIn />}
      topBar={topBar}
    >
      {children}
    </RootLayoutNavigator>
  );
};

export default ContainerDrawer;
