import styled from 'styled-components/native'
import { theme } from '../../../theme'

interface FormInputProps {
  isFocused: boolean;
} 

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray_600};
  position: 'relative';
`
export const FormContainer = styled.View`
  top: 80px;
  padding: 24px;
  width: 100%;
  margin-top: 36px;
  margin-bottom: 42px;
  position: absolute;
  flex-direction: row;
`
export const FormInput = styled.TextInput<FormInputProps>`
  flex: 1;
  height: 56px;
  border-radius: 5px;
  font-size: 16px;
  padding: 16px;
  margin-right: 5px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.gray_400};
  border: 1px solid ${({ isFocused }) => (isFocused ? theme.colors.roxol_escuro : 'transparent')};
`
export const FormButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.azul_escuro};
`
export const FormButtontContainer = styled.View`
  
`
export const FlatListContainer = styled.View`
  flex: 1;
`

export const FormButtonContent = styled.View`
  border: 2px solid ${theme.colors.white};
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  overflow: hidden;
`
export const FormButtonText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.md}px;
`
export const CounterContainer = styled.View`
  margin: 32px 0;
  padding: 24px;
`
export const CounterHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const CriadaText = styled.View`
  gap: 8px;
  align-items: center;
  flex-direction: row;
`
export const CompletedText = styled.View`
  gap: 8px;
  align-items: center;
  flex-direction: row;
`
export const Criada = styled.Text`
  color: ${theme.colors.azul};
  font-size: ${theme.fontSize.lg}px;
  font-family: ${theme.fontFamily.bold};
`
export const Completed = styled.Text`
  color: ${theme.colors.roxo};
  font-size: ${theme.fontSize.lg}px;
  font-family: ${theme.fontFamily.bold};
`
export const Counter = styled.Text`
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  overflow: hidden;
  color: ${theme.colors.white};
  background-color: ${theme.colors.gray_400};
`
export const CounterCompleted = styled.Text`
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  overflow: hidden;
  color: ${theme.colors.white};
  background-color: ${theme.colors.gray_400};
`
export const Divider = styled.View`
  border: 0.5px solid ${theme.colors.gray_100};
  
`