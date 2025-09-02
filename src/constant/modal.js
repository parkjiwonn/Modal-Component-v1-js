// 모달 타입별 설정
export const  MODAL_CONFIGS = {
    info: {
      className: 'modal-info',
      showConfirmButton: false,
      showCancelButton: false,
      showCloseButton: true
    },
    confirm: {
      className: 'modal-confirm',
      showConfirmButton: true,
      showCancelButton: true,
      showCloseButton: true
    },
    input: {
      className: 'modal-input',
      showConfirmButton: true,
      showCancelButton: true,
      showCloseButton: true
    },
    select: {
      className: 'modal-select',
      showConfirmButton: true,
      showCancelButton: true,
      showCloseButton: true
    },
    critical: {
      className: 'modal-critical',
      showConfirmButton: true,
      showCancelButton: false,
      showCloseButton: false
    }
  };
  
  // 모달 타입 enum (선택사항)
  export const MODAL_TYPES = {
    INFO: 'info',
    CONFIRM: 'confirm',
    INPUT: 'input',
    SELECT: 'select',
    CRITICAL: 'critical'
  };