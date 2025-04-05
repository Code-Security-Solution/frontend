import ProfileTab from '../ProfileTab';
import useProfileTab from '../ProfileTab/hooks/useProfileTab';
import * as S from './styles';
import { GoChevronDown } from 'react-icons/go';

interface ProfileInfoProps {
  email: string;
}

const ProfileInfo = ({ email }: ProfileInfoProps) => {
  const { isOpened, containerRef, handleContainerClick } = useProfileTab();

  return (
    <S.ProfileInfoSection ref={containerRef}>
      <S.ProfileInfoContainer onClick={handleContainerClick}>
        <S.ProfileEmail>{email}</S.ProfileEmail>
        <GoChevronDown size={20} />
      </S.ProfileInfoContainer>
      {isOpened && <ProfileTab />}
    </S.ProfileInfoSection>
  );
};

export default ProfileInfo;
