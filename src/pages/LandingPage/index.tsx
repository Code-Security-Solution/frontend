import * as S from './styles';
import { FaFileCode, FaTimes } from 'react-icons/fa';
import useFileUpload from './hooks/useFileUpload';
import UndraggableWrapper from '@/components/common/UndraggableWrapper';
import { useMutation } from '@tanstack/react-query';
import { postFileUpload } from '@/api/semgrep';
import { useNavigate } from 'react-router-dom';
import { PostFileUploadResult } from '@/types/semgrep';

const LandingPage = () => {
  const navigate = useNavigate();
  const { files, isDragging, fileInputRef, handleFileInputChange, handleClickFileInput, handleDeleteFile } =
    useFileUpload();

  const { mutate: mutateFileUpload, isPending } = useMutation({
    mutationFn: async () => {
      return await postFileUpload({ files });
    },
    mutationKey: ['fileUpload'],
    onSuccess: (data) => {
      const scanId = (data.result as PostFileUploadResult).scan_id;
      console.log('File analyze success:', data);
      navigate(`/summary/${scanId}`);
    },
    onError: (error) => {
      console.error('File upload error:', error);
    },
  });

  const safeHandleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPending) return;
    handleFileInputChange(e);
  };

  const safeHandleClickFileInput = () => {
    if (isPending) return;
    handleClickFileInput();
  };

  const safeHandleDeleteFile = (file: File) => {
    if (isPending) return;
    handleDeleteFile(file);
  };

  return (
    <>
      {isDragging && <S.DragOverlay />}
      <S.LandingPageContainer>
        <S.FileUploadForm>
          <S.GuideText>소스 코드를 업로드해서 보안 취약점이 있는지 간단하게 확인해 보세요.</S.GuideText>
          <S.EmptyFileContainer>
            {files.length > 0 && (
              <>
                <S.UploadedFileInfo>{files.length}개 파일 선택됨</S.UploadedFileInfo>
                <S.UploadedFileContainer>
                  <S.UploadedFileList>
                    {files.map((file, index) => (
                      <S.FileItem key={`${file.name}_${index}`}>
                        {file.name}
                        <S.DeleteFileButton onClick={() => safeHandleDeleteFile(file)}>
                          <FaTimes size={24} />
                        </S.DeleteFileButton>
                      </S.FileItem>
                    ))}
                  </S.UploadedFileList>
                </S.UploadedFileContainer>
              </>
            )}
            <S.FileInput
              type="file"
              multiple={true}
              ref={fileInputRef}
              onChange={safeHandleFileInputChange}
              disabled={isPending}
            />
            <S.DashBorderBox $isFileSelected={files.length > 0} onClick={safeHandleClickFileInput}>
              <FaFileCode size={48} />
              <UndraggableWrapper>
                <S.EmptyFileMessage>클릭하거나 드래그해서 파일을 선택해 보세요</S.EmptyFileMessage>
              </UndraggableWrapper>
            </S.DashBorderBox>
          </S.EmptyFileContainer>
          <S.SubmitButton
            styleType="primary"
            isLoading={isPending}
            $isVisible={files.length > 0}
            onClick={() => mutateFileUpload()}
          >
            코드 분석
          </S.SubmitButton>
        </S.FileUploadForm>
      </S.LandingPageContainer>
    </>
  );
};

export default LandingPage;
