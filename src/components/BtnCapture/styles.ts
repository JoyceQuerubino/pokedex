import { Dimensions } from "react-native";
import styled from "styled-components/native";
import PokebolaPNG from '../../assets/images/pokebola.png';
import PokebolaEmptyPNG from '../../assets/images/pokebola-empty.png';

export const Container = styled.TouchableOpacity``;

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


