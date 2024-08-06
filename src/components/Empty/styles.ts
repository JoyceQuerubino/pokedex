import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import SadPNG from '../../assets/images/sad.png';

export const Container = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.LIGHT};
  `}

  margin-top: 24px;
`;


export const ImagePNG = styled.Image.attrs(() => ({
  resizeMode: 'contain',
  source: SadPNG,
}))`
  width: ${Dimensions.get('window').width * 0.4}px;
  height: ${Dimensions.get('window').width * 0.4}px;
`
