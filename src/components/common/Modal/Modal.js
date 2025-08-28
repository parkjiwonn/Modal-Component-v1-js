import React from 'react';
import './Modal.css';
import {  MODAL_CONFIGS } from '@/constant/modal';
import {  useModalManager } from '@/hook/useModalManager';

// 개별 모달 컴포넌트
const SingleModal = ({
    id,
    isOpen,
    onClose,
    type = 'info',
    title,
    message,
    children,
    onConfirm,
    onCancel,
    confirmText = '확인',
    cancelText = '취소',
    options = [] // 선택 모달용
}) => {
    if (!isOpen) return null;

    const config = MODAL_CONFIGS[type] || MODAL_CONFIGS.info;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && config.showCloseButton) {
            onClose(id);
        }
    };

    const handleConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
        onClose(id);
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        onClose(id);
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className={`modal-content ${config.className}`}>
                {/* 헤더 */}
                <div className="modal-header">
                    {title && <h3 className="modal-title">{title}</h3>}
                    {config.showCloseButton && (
                        <button className="modal-close-btn" onClick={() => onClose(id)}>
                            ×
                        </button>
                    )}
                </div>

                {/* 바디 */}
                <div className="modal-body">
                    {message && <p className="modal-message">{message}</p>}

                    {/* 입력 모달 */}
                    {type === 'input' && (
                        <input
                            type="text"
                            className="modal-input-field"
                            placeholder="입력하세요..."
                            autoFocus
                        />
                    )}

                    {/* 선택 모달 */}
                    {type === 'select' && options.length > 0 && (
                        <div className="modal-options">
                            {options.map((option, index) => (
                                <label key={index} className="modal-option">
                                    <input type="radio" name="modal-select" value={option.value} />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    )}

                    {/* 커스텀 컨텐츠 */}
                    {children}
                </div>

                {/* 푸터 */}
                <ModalFooter>
                    {config.showCancelButton && (
                        <button className="modal-btn modal-btn-cancel" onClick={handleCancel}>
                            {cancelText}
                        </button>
                    )}
                    {config.showConfirmButton && (
                        <button className="modal-btn modal-btn-confirm" onClick={handleConfirm}>
                            {confirmText}
                        </button>
                    )}
                </ModalFooter>
            </div>
        </div>
    );
};

// 메인 모달 매니저 컴포넌트
const Modal = () => {
    const { modals, closeModal } = useModalManager();

    return (
        <>
            {modals.map((modal) => (
                <SingleModal
                    key={modal.id}
                    {...modal}
                    onClose={closeModal}
                />
            ))}
        </>
    );
};

// 모달 푸터 컴포넌트
export const ModalFooter = ({ children }) => {
    if (!children) return null;

    return (
        <div className="modal-footer">
            {children}
        </div>
    );
};

// 편의를 위한 개별 모달 컴포넌트도 export
export { SingleModal };
export default Modal;