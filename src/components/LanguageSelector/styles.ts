import styled from "styled-components";

export const LanguagePanel = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  font-family: "bold";
  font-size: 1.2rem;
  color: white;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  border: none !important;
  margin-left: 0.1rem;
  background-color: transparent;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const ImageCardFlag = styled.img`
  margin: none !important;
  width: 2.2rem;
`;
