import { css } from "@styled-system/css";

const ProgressThumb = styled.div`
  transition: 200ms;
  width: ${(props) => props.percentage}%;
  ${css({
      bg: "darkAlpha.2",
  })};
`;
const ProgressTracker = styled.div`
  height: 3px;
  border-radius: 5px;
  ${ProgressThumb} {
      height: 100%;
      width: 0%;
  }
  ${css({
      bg: "darkAlpha.4",
  })};
`;

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressTracker>
        <ProgressThumb percentage={percentage} />
    </ProgressTracker>
  );
};
ProgressBar.defaultProps = {
  percentage: 0,
};

export default ProgressBar;
