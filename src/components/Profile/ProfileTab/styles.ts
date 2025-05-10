import styled from 'styled-components';

export const ProfileTabContainer = styled.section`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  top: 4rem;
  right: 0;

  display: flex;
  flex-direction: column;

  width: 15rem;
  height: fit-content;
  padding: 0.4rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow:
    0 0.5rem 0.5rem -0.3rem rgb(0 0 0 / 20%),
    0 0.8rem 1rem 0.1rem rgb(0 0 0 / 14%),
    0 0.3rem 1.4rem 0.2rem rgb(0 0 0 / 12%);

  :last-child {
    border-bottom: none;
  }
`;

export const ProfileTabItem = styled.div`
  cursor: pointer;

  display: flex;
  gap: 1rem;
  align-items: center;

  padding: 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray200};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const ProfileTabItemText = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;
