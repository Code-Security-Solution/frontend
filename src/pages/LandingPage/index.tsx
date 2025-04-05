import * as S from './styles';
import { FaFileCode, FaTimes } from 'react-icons/fa';
import useFileUpload from './hooks/useFileUpload';
import UndraggableWrapper from '@/components/common/UndraggableWrapper';

const LandingPage = () => {
  const { files, isDragging, fileInputRef, handleFileInputChange, handleClickFileInput, handleDeleteFile } =
    useFileUpload();

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
                        <S.DeleteFileButton onClick={() => handleDeleteFile(file)}>
                          <FaTimes size={24} />
                        </S.DeleteFileButton>
                      </S.FileItem>
                    ))}
                  </S.UploadedFileList>
                </S.UploadedFileContainer>
              </>
            )}
            <S.FileInput type="file" multiple={true} ref={fileInputRef} onChange={handleFileInputChange} />
            <S.DashBorderBox $isFileSelected={files.length > 0} onClick={handleClickFileInput}>
              <FaFileCode size={48} />
              <UndraggableWrapper>
                <S.EmptyFileMessage>클릭하거나 드래그해서 파일을 선택해 보세요</S.EmptyFileMessage>
              </UndraggableWrapper>
            </S.DashBorderBox>
          </S.EmptyFileContainer>
          <S.SubmitButton styleType="primary" $isVisible={files.length > 0}>
            코드 분석
          </S.SubmitButton>
        </S.FileUploadForm>
      </S.LandingPageContainer>
    </>
  );
};

export default LandingPage;
