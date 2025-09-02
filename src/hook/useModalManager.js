import React, { createContext, useContext, useState, useCallback } from 'react';

// 모달 컨텍스트 생성
const ModalContext = createContext();

// 모달 프로바이더 컴포넌트
export const ModalProvider = ({ children }) => {
   const [modals, setModals] = useState([]);

  const openModal = useCallback((modalConfig) => {
    const id = Date.now() + Math.random(); // 유니크 ID 생성
    const newModal = {
      id,
      isOpen: true,
      ...modalConfig
    };
    
    setModals(prev => [...prev, newModal]);
    return id;
  }, []);

  const closeModal = useCallback((id) => {
    setModals(prev => prev.filter(modal => modal.id !== id));
  }, []);

  const closeAllModals = useCallback(() => {
    setModals([]);
  }, []);

  const updateModal = useCallback((id, updates) => {
    setModals(prev => 
      prev.map(modal => 
        modal.id === id ? { ...modal, ...updates } : modal
      )
    );
  }, []);

  const value = {
    modals,
    openModal,
    closeModal,
    closeAllModals,
    updateModal
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

// useModalManager 훅
export const useModalManager = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalManager must be used within a ModalProvider');
  }
  return context;
};