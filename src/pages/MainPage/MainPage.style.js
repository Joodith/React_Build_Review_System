import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || "dodgerBlue"};
    color: ${(props) => props.color || "white"};
    border: ${(props)=>props.border || "none"};
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
    
`;