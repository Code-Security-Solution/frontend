import { useEffect, useRef, useState } from 'react';

const useFileUpload = () => {
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

  return {
    files,
    isDragging,
    fileInputRef,
    handleFileInputChange,
    handleClickFileInput,
  };
};

export default useFileUpload;
