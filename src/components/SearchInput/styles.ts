import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Input = styled.TextInput`
  padding: 8px;
  height: 40px;
  border-color: gray;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: white;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 24px;
`;
