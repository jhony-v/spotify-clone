import styled from "@emotion/styled";
import BaseLabel from "@spf-components/common/BaseLabel";
import Wrapper from "@spf-components/common/Wrappers/Wrapper";
import Link from "next/link";

const S = {};
S.ButtonSignUp = styled.a`
    background-color:white;
    font-weight:700;
    border-radius:20px;
    padding:10px 40px;
`
S.WrapperGradient = styled.div`
  --banner-primary: #af2896;
  --banner-secondary:#509bf5;
  background-image: linear-gradient(90deg, var(--banner-primary),var(--banner-secondary));
  margin: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: absolute;
  padding:10px 40px;
  display:flex;
  align-items:center;
  cursor:pointer;
  ${S.ButtonSignUp} {
      color:var(--banner-secondary);
  }
  ${BaseLabel} {
      font-size:.9rem;
  }
`;

const BannerGradientSignIn = () => {
  return <S.WrapperGradient>
      <Wrapper>
        <BaseLabel>PREVIEW OF SPOTIFY</BaseLabel>
        <Wrapper mt={2}>
            <BaseLabel>Sign up to get unlimited songs and potcasts with occasional ads. No credit card needed.</BaseLabel>
        </Wrapper>
      </Wrapper>
      <Wrapper ml="auto">
        <S.ButtonSignUp href="/sign-in">
                SIGN UP FREE
        </S.ButtonSignUp>
      </Wrapper>
  </S.WrapperGradient>;
};

export default BannerGradientSignIn;
