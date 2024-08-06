import { Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";
import PokebolaPNG from '../../assets/images/pokebola.png';
import PokebolaEmptyPNG from '../../assets/images/pokebola-empty.png';

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  padding-top: 24px;
  justify-content: space-between;
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(AntDesign)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

export const ImageContainer = styled.TouchableOpacity``;

export const ImagePNG = styled.Image.attrs(() => ({
  resizeMode: 'contain',
  source: PokebolaPNG,
}))`
  width: ${Dimensions.get('window').width * 0.1}px;
  height: ${Dimensions.get('window').width * 0.1}px;
`

export const ImageEmptyPNG = styled.Image.attrs(() => ({
  resizeMode: 'contain',
  source: PokebolaEmptyPNG,
}))`
  width: ${Dimensions.get('window').width * 0.1}px;
  height: ${Dimensions.get('window').width * 0.1}px;
`


