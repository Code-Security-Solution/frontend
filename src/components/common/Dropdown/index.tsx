import { FaChevronDown } from 'react-icons/fa';

import useDropdown from '@/hooks/useDropdown';

import * as S from './styles';

export interface DropdownItem<T extends string = string> {
  text: string;
  value: T;
}

interface DropdownProps<T extends string = string> {
  items: DropdownItem<T>[];
  selectedItem: DropdownItem<T>;
  handleSelect: (item: DropdownItem<T>) => void;
}

const Dropdown = <T extends string>({ items, selectedItem, handleSelect }: DropdownProps<T>) => {
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
