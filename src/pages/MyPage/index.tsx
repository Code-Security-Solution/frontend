import { useUserInfoStore } from '@/stores/useUserInfoStore';
import * as S from './styles';
import Tooltip from '@/components/common/Tooltip';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ScanHistoryList from './components/ScanHistoryList';

const MyPage = () => {
  const { userInfo } = useUserInfoStore();
  if (!userInfo) return null;

  return (
    <S.MyPageContainer>
      <S.MyPageTitle>마이페이지</S.MyPageTitle>
      <S.ProfileContainer>
        <S.Username>{userInfo.username}</S.Username>
        <S.UserEmail>{userInfo.email}</S.UserEmail>
      </S.ProfileContainer>
      <S.ScanHistorySection>
        <S.ScanHistoryTitle>이전에 스캔한 목록</S.ScanHistoryTitle>
        <Tooltip message="각 스캔 목록을 클릭하면 요약 레포트로 이동해요." position="bottom">
          <FaRegQuestionCircle size={20} />
        </Tooltip>
      </S.ScanHistorySection>
      <ScanHistoryList />
    </S.MyPageContainer>
  );
};

export default MyPage;
