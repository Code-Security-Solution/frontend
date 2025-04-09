import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

export const InputLabel = styled.label`
  ${({ theme }) => theme.fonts.regularBody};
`;

export const Input = styled.input`
  ${({ theme }) => theme.fonts.regularBody};
  width: 100%;
  height: 4rem;
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 1rem;

  outline: none;
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.regularBody};
  color: ${({ theme }) => theme.colors.error};
`;
