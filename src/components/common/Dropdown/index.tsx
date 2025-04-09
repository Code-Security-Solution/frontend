import { FaChevronDown } from 'react-icons/fa';

import useDropdown from '@/hooks/useDropdown';

import * as S from './styles';

export interface DropdownItem {
  text: string;
  value: string | number;
}

interface DropdownProps {
  items: DropdownItem[];
  selectedItem: DropdownItem;
  handleSelect: (item: DropdownItem) => void;
}

const Dropdown = ({ items, selectedItem, handleSelect }: DropdownProps) => {
  const { isOpened, handleDropdownButtonClick, handleOptionClick, dropdownRef } = useDropdown({ handleSelect });

  return (
    <S.DropdownContainer ref={dropdownRef}>
      <S.DropdownButton onClick={handleDropdownButtonClick}>
        <S.SelectedOption>{selectedItem.text}</S.SelectedOption>
        <S.ArrowIcon $isOpened={isOpened}>
          <FaChevronDown />
        </S.ArrowIcon>
      </S.DropdownButton>
      {isOpened && (
        <S.ItemContainer>
          {items.map((item) => {
            return (
              <S.DropdownItem key={item.value} onClick={() => handleOptionClick(item)}>
                {item.text}
              </S.DropdownItem>
            );
          })}
        </S.ItemContainer>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
