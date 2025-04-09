import { PropsWithChildren } from 'react';
import * as S from './styles';

interface TooltipProps {
  message: string;
  position?: S.TooltipStyleProps['$position'];
}

const Tooltip = ({ message, position = 'bottom', children }: PropsWithChildren<TooltipProps>) => {
  return (
    <S.TooltipContainer>
      {children}
      <S.TooltipContent className="tooltip" $position={position}>
        {message}
      </S.TooltipContent>
    </S.TooltipContainer>
  );
};

export default Tooltip;
