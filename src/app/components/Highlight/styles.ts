import styled from "styled-components/native";
import { theme } from '../../../theme'

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const FlaListImg = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`
export const FlatListText = styled.Text`
  text-align: center;
  font-size: ${theme.fontSize.lg}px;
  color: ${theme.colors.gray_200};
  font-family: ${theme.fontFamily.bold};
`
export const FlatListTextSpan = styled.Text`
  text-align: center;
  font-size: ${theme.fontSize.lg}px;
  color: ${theme.colors.gray_200};
  font-family: ${theme.fontFamily.regular};
`