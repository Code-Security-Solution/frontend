import { motion } from 'motion/react';
import styled from 'styled-components';

export const RegisterPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const RegisterForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;

  width: 45rem;
  padding: 3.2rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const RegisterFormTitle = styled.h1`
  ${({ theme }) => theme.fonts.title1}
`;

export const RegisterFormDescription = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const ToggleLoginButton = styled.p`
  cursor: pointer;
  ${({ theme }) => theme.fonts.regularBody};
  text-decoration: underline;
`;
