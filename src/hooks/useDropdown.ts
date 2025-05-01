import { useEffect, useRef, useState } from 'react';

import { DropdownItem } from '@/components/common/Dropdown';

interface UseDropdownProps<T extends string = string> {
  handleSelect: (option: DropdownItem<T>) => void;
}

const useDropdown = <T extends string = string>({ handleSelect }: UseDropdownProps<T>) => {
  const [isOpened, setIsOpened] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownButtonClick = () => {
    setIsOpened((prev) => !prev);
  };

  const handleOptionClick = (option: DropdownItem<T>) => {
    handleSelect(option);
    setIsOpened(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return { isOpened, handleDropdownButtonClick, handleOptionClick, dropdownRef };
};

export default useDropdown;
