import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 173px;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_700};
`
export const Logo = styled.Image`
  width: 115px;
  height: 32px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.azul};
  font-size: ${({ theme }) => theme.font_size.xs}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`
export const TitleRosh = styled.Text`
  color: ${({ theme }) => theme.colors.roxol_escuro};
  font-size: ${({ theme }) => theme.font_size.xs}px;
  font-family: ${({ theme }) => theme.font_family.bold};
`