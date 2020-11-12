import { colors } from "./colors";
import { fontSizes, fontWeights } from "./fonts";
import { breakpoints, mediaQueries } from "./breakpoints";

const spfDesingLanguage = {
  ...colors,
  ...fontSizes,
  ...fontWeights,
  ...breakpoints,
  ...mediaQueries,
  margins: [0, 2, 5, 8, 10, 15, 20, 25, 30, 40, 50],
  radii: {
    2: 2,
    5: 5,
    medium: 20,
    complete: "100%",
  },
};
export default spfDesingLanguage;
