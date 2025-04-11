import { DropdownItem } from '@/components/common/Dropdown';
import { useState } from 'react';

const useSummaryReportFilter = () => {
  const dropdownFilterList: DropdownItem[] = [
    { text: '심각도별 보기', value: 'orderBySeverity' },
    { text: '취약점 패턴별 보기', value: 'orderByPattern' },
  ];

  const [selectedFilter, setSelectedFilter] = useState<DropdownItem>(dropdownFilterList[0]);

  const handleSelectDropdownItem = (value: DropdownItem) => {
    setSelectedFilter(value);
  };

  return {
    dropdownFilterList,
    selectedFilter,
    handleSelectDropdownItem,
  };
};

export default useSummaryReportFilter;
