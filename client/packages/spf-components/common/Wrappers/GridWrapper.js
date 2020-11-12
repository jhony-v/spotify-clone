import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { grid } from "styled-system";

export default styled.div`
    display:grid;
    ${props => props.autosize && css`
        grid-template-columns:repeat(auto-fill,minmax(${props.autosize},1fr));
        align-content:space-between;
    `}
    ${grid};
`