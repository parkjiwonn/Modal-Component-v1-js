import React from 'react';
import {  useModalManager } from '@/hook/useModalManager';
import './ModalTestPage.css';

const ModalTestPage = () => {
  const { openModal } = useModalManager();

  // 1. 정보 모달 (닫기 버튼만 있음)
  const handleOpenInfoModal = () => {
    openModal({
      type: 'info',
      title: '정보',
      message: '이것은 정보 모달입니다. 닫기 버튼으로만 닫을 수 있습니다.'
    });
  };

  // 2. 확인 모달 (확인/취소 버튼)
  const handleOpenConfirmModal = () => {
    openModal({
      type: 'confirm',
      title: '확인',
      message: '정말 삭제하시겠습니까?',
      onConfirm: () => console.log('삭제 확인됨'),
      onCancel: () => console.log('삭제 취소됨')
    });
  };

  // 3. 입력 모달 (텍스트 입력 필드)
  const handleOpenInputModal = () => {
    openModal({
      type: 'input',
      title: '이름 입력',
      message: '새로운 이름을 입력해주세요:',
      onConfirm: () => console.log('입력 확인됨'),
      onCancel: () => console.log('입력 취소됨')
    });
  };

  // 4. 선택 모달 (라디오 버튼 옵션들)
  const handleOpenSelectModal = () => {
    openModal({
      type: 'select',
      title: '옵션 선택',
      message: '원하는 옵션을 선택해주세요:',
      options: [
        { value: 'option1', label: '옵션 1' },
        { value: 'option2', label: '옵션 2' },
        { value: 'option3', label: '옵션 3' }
      ],
      onConfirm: () => console.log('선택 확인됨'),
      onCancel: () => console.log('선택 취소됨')
    });
  };

  // 5. 중요 모달 (확인 버튼만, 배경 클릭으로 닫기 불가)
  const handleOpenCriticalModal = () => {
    openModal({
      type: 'critical',
      title: '중요 알림',
      message: '이것은 중요한 알림입니다. 반드시 확인 버튼을 눌러야 합니다.',
      onConfirm: () => console.log('중요 알림 확인됨')
    });
  };

  return (
    <div className="modal-test-page">
      <h1>모달 테스트 페이지</h1>
      <div className="button-container">
        
        {/* 기본 모달 타입들 */}
        <div className="button-group">
          <h3>기본 모달 타입</h3>
          <button onClick={handleOpenInfoModal}>
            Info 모달 (정보)
          </button>
          <button onClick={handleOpenConfirmModal}>
            Confirm 모달 (확인/취소)
          </button>
          <button onClick={handleOpenInputModal}>
            Input 모달 (입력)
          </button>
          <button onClick={handleOpenSelectModal}>
            Select 모달 (선택)
          </button>
          <button onClick={handleOpenCriticalModal}>
            Critical 모달 (중요)
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModalTestPage;