import styled from "@emotion/styled";

const AppLayouts = {
  Root: styled.div`
    height: 100%;
    min-height: 100%;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "nav-bar main-view main-view"
      "now-playing now-playing now-playing";
  `,
  NavBar: styled.div`
    grid-area: nav-bar;
    width:${props => props.theme.dimensions.navBar.w};
    background-color:${props => props.theme.colors.navBar};
  `,
  TopBar: styled.div`
    grid-area: main-view;
    position:relative;
    height:${props => props.theme.dimensions.topBar.h};
  `,
  NowPlaying: styled.div`
    grid-area: now-playing;
    height:${props => props.theme.dimensions.nowPlaying.h};
    background-color:${props => props.theme.colors.footer};
  `,
  MainView: styled.div`
    grid-area: main-view;
    overflow-y:auto;
    &::-webkit-scrollbar {
      background-color:transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color:rgba(100,100,100,.5);
    }
    &::-webkit-scrollbar-button {
      height:5px;
    }
  `,
};

export default AppLayouts;
