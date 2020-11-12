import ActiveLink from "@spf-components/common/ActiveLink";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import RowButtonSelectable from "@spf-components/globals/RowButtonSelectable";

const RowLinkItem = ({ href, text, icon }) => {
  return (
    <Wrapper>
      <ActiveLink href={href}>
        {({ active }) => (
          <RowButtonSelectable selected={active} icon={icon}>{text}</RowButtonSelectable>
        )}
      </ActiveLink>
    </Wrapper>
  );
};

export default RowLinkItem;
