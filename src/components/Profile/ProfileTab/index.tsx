import UndraggableWrapper from '@/components/common/UndraggableWrapper';

import useProfileTabElements from './hooks/useProfileTabElements';
import * as S from './styles';

const ProfileTab = () => {
  const { profileTabElements } = useProfileTabElements();

  return (
    <S.ProfileTabContainer>
      <UndraggableWrapper>
        {profileTabElements.map((element) => (
          <S.ProfileTabItem key={element.elementId} onClick={element.handleClick}>
            {element.content.icon}
            <S.ProfileTabItemText>{element.content.text}</S.ProfileTabItemText>
          </S.ProfileTabItem>
        ))}
      </UndraggableWrapper>
    </S.ProfileTabContainer>
  );
};

export default ProfileTab;
