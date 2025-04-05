import styled from 'styled-components';
import Button from '../Button';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6rem;
  padding: 1.2rem 1.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray200};

  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const LogoIcon = styled.img`
  cursor: pointer;
`;

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  list-style: none;
`;

export const MenuWrapper = styled.li`
  cursor: pointer;
  ${({ theme }) => theme.fonts.mediumBody}
`;

export const LoginButton = styled(Button)`
  height: 3.6rem;
  border-radius: 1.8rem;
  ${({ theme }) => theme.fonts.mediumBody}

  &:hover {
    opacity: 0.8;
  }
`;
