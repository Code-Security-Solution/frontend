import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { FaFileCode, FaTimes } from 'react-icons/fa';

const LandingPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [_, setDragCounter] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  // 버튼 클릭을 통한 파일 추가
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  // 드래그 카운터 증가 및 상태 활성화
  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    setDragCounter((prev) => {
      const newCount = prev + 1;
      if (newCount > 0) setIsDragging(true);
      return newCount;
    });
  };

  // 드래그 중인 경우 기본 동작 방지
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  // 드래그 카운터 감소 및 상태 비활성화
  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setDragCounter((prev) => {
      const newCount = prev - 1;
      if (newCount <= 0) {
        setIsDragging(false);
        return 0;
      }
      return newCount;
    });
  };

  // 카운터 초기화, 상태 해제 및 파일 추가
  const handleDragDrop = (e: DragEvent) => {
    if (!e.dataTransfer) return;

    e.preventDefault();
    setDragCounter(0);
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  useEffect(() => {
    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDragDrop);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDragDrop);
    };
  }, []);

  return (
    <>
      {isDragging && <S.DragOverlay />}
      <S.LandingPageContainer>
        <S.FileUploadForm>
          <S.GuideText>소스 코드를 업로드해서 보안 취약점이 있는지 확인해 보세요.</S.GuideText>
          <S.EmptyFileContainer>
            {files.length > 0 && (
              <>
                <S.UploadedFileInfo>{files.length}개 파일 선택됨</S.UploadedFileInfo>
                <S.UploadedFileContainer>
                  <S.UploadedFileList>
                    {files.map((file, index) => (
                      <S.FileItem key={`${file.name}_${index}`}>
                        {file.name}
                        <S.DeleteFileButton>
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
              <S.EmptyFileMessage>클릭하거나 드래그해서 파일을 선택해 보세요</S.EmptyFileMessage>
            </S.DashBorderBox>
          </S.EmptyFileContainer>
        </S.FileUploadForm>
      </S.LandingPageContainer>
    </>
  );
};

export default LandingPage;
