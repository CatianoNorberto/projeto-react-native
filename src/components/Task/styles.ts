import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`
export const Content = styled.View`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray_400};
  padding: 16px 16px 16px 10px;
  width: 100%;
  gap: 5px;
  margin-bottom: 10px;
`