import React from "react";
import AppLayouts from "../AppLayouts";

const RootLayoutNavigator = ({ navBar, footer, topBar, children }) => {
  return (
    <AppLayouts.Root>
      <AppLayouts.NavBar>{navBar}</AppLayouts.NavBar>
      <AppLayouts.TopBar>{topBar}</AppLayouts.TopBar>
      <AppLayouts.MainView>{children}</AppLayouts.MainView>
      <AppLayouts.NowPlaying>{footer}</AppLayouts.NowPlaying>
    </AppLayouts.Root>
  );
};

export default RootLayoutNavigator;
