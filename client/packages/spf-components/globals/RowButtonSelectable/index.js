import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import BaseLabel from "@spf-components/common/BaseLabel";
import FlexWrapper from "@spf-components/common/Wrappers/FlexWrapper";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";

const FlexWrapperButton = styled(FlexWrapper)`
  border-radius: 8px;
  align-items: center;
  width: 100%;
  padding: 15px 5px;
  transition: 0.3s;
  background-color:${props => props.selected && props.theme.colors.darkAlpha[4]};
  &:hover {
    background: ${(props) => props.theme.colors.darkAlpha[5]};
  }
`;

const RowButtonSelectable = ({ icon: IconComponent, children,selected, onClick }) => {
  const { colors: { text } } = useTheme();  
  return (
    <FlexWrapperButton selected={selected} onClick={onClick}>
      <Wrapper mr="5px">{IconComponent && <IconComponent color={text.primary} />}</Wrapper>
      <BaseLabel fontWeight="bold">{children}</BaseLabel>
    </FlexWrapperButton>
  );
};

export default RowButtonSelectable;
