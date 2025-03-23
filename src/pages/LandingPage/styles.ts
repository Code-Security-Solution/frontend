import Button from '@/components/common/Button';
import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const DragOverlay = styled.div`
  pointer-events: none;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  font-size: 4rem;
  font-weight: 700;

  opacity: 0.4;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const FileUploadForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GuideText = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
  margin-bottom: 3.2rem;
`;

export const EmptyFileContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80rem;
  height: 40rem;
  padding: 1.6rem;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const DashBorderBox = styled.div<{ $isFileSelected: boolean }>`
  cursor: pointer;

  display: flex;
  flex-direction: ${({ $isFileSelected }) => ($isFileSelected ? 'row' : 'column')};
  gap: 3.2rem;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${({ $isFileSelected }) => ($isFileSelected ? '8rem' : '100%')};
  border: 0.4rem dashed ${({ theme }) => theme.colors.gray300};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const EmptyFileMessage = styled.p`
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileUploadButton = styled(Button)`
  width: 15rem;
  margin-top: 6.4rem;
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const UploadedFileContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const UploadedFileInfo = styled.label`
  margin-bottom: 0.8rem;
  ${({ theme }) => theme.fonts.description};
`;

export const UploadedFileList = styled.ul`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  height: 25rem;
`;

export const FileItem = styled.li`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 4rem;
  padding: 0 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 0.8rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ theme }) => theme.fonts.mediumBody};
`;

export const DeleteFileButton = styled.button`
  color: ${({ theme }) => theme.colors.gray500};
`;

export const SubmitButton = styled(Button)<{ $isVisible: boolean }>`
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  width: 20rem;
  margin-top: 3.2rem;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  transition: opacity 0.3s;
`;
