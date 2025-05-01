import { motion } from 'motion/react';
import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const LoginForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;

  width: 45rem;
  padding: 3.2rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const LoginFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`;

export const LoginFormTitle = styled.h1`
  ${({ theme }) => theme.fonts.title1}
`;

export const LoginFormDescription = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const LoginFormErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
  color: ${({ theme }) => theme.colors.error};
`;

export const ToggleRegisterButton = styled.p`
  cursor: pointer;
  ${({ theme }) => theme.fonts.regularBody};
  text-decoration: underline;
`;
