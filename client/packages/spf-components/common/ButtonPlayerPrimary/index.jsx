import styled from "@emotion/styled";
import { color, size } from "styled-system";
import { BsFillPlayFill, BsPause } from "react-icons/bs";

const StyledButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  ${size};
  ${color};
`;

StyledButtonWrapper.defaultProps = {
  size: "40px",
  bg: "primary",
  color: "text.primary",
};

const ButtonPlayerPrimary = ({ onClick, playing }) => {
  const IconPlaying = playing ? BsPause : BsFillPlayFill;
  return (
    <StyledButtonWrapper onClick={onClick}>
      <IconPlaying size={25} />
    </StyledButtonWrapper>
  );
};

export default ButtonPlayerPrimary;
