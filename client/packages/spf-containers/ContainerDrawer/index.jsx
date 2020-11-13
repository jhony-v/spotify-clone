import BannerGradientSignIn from "@spf-components/globals/BannerGradientSignIn";
import RootLayoutNavigator from "@spf-components/globals/RootLayoutNavigator";
import ContainerNavBarNavigator from "@spf-containers/ContainerNavBarNavigator";

const ContainerDrawer = ({ children }) => {
  return (
    <RootLayoutNavigator
      navBar={<ContainerNavBarNavigator />}
      footer={<BannerGradientSignIn />}
    >
      {children}
    </RootLayoutNavigator>
  );
};

export default ContainerDrawer;
