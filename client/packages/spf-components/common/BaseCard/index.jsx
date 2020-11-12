import styled from "@emotion/styled";
import { variant } from "styled-system";

const BaseCard = styled.div`
   border-radius:5px;
   &:hover{
     background:${props => props.theme.colors.darkAlpha[5]};  
   }
   ${variant({
     variants: {
       default: {
        bg: "darkAlpha.4",
       },
       outline: {
         border: "lightAlpha.0", 
       }
     }
   })}
`
BaseCard.defaultProps = {
  variant: "default"
}

export default BaseCard;