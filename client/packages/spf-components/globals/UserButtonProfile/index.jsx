import BaseLabel from "@spf-components/common/BaseLabel";
import FlexWrapper from "@spf-components/common/Wrappers/FlexWrapper";
import BaseImage from "@spf-components/common/BaseImage";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import faker from "faker";
import styled from "@emotion/styled";

const StyledUserButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding:5px 10px;
  border-radius:25px;
  background-color:rgba(0,0,0,.8);
  ${BaseImage} {
    border-radius: 100%;
  }
  ${BaseLabel} {
    font-weight: bold;
  }
`;

const UserButtonProfile = () => {
  return (
    <StyledUserButtonWrapper>
      <BaseImage size={30} src={faker.random.image()} />
      <Wrapper mx={3}>
        <BaseLabel>{faker.name.firstName()}</BaseLabel>
      </Wrapper>
    </StyledUserButtonWrapper>
  );
};

export default UserButtonProfile;
