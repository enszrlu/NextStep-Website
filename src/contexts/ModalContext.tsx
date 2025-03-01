'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNextStep } from 'nextstepjs';

type ModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  // Initialize state from localStorage (if available) or default to false
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { startNextStep, currentTour, closeNextStep } = useNextStep();

  // Initialize state from localStorage on component mount
  useEffect(() => {
    // Only run on client-side to avoid SSR issues
    if (typeof window !== 'undefined') {
      const storedModalState = localStorage.getItem('modalOpen');
      if (storedModalState) {
        const isOpen = JSON.parse(storedModalState);
        setIsModalOpen(isOpen);

        // If modal should be open, start the tour
        if (isOpen) {
          // startNextStep('modal-tour');
          setTimeout(() => {
            startNextStep('modal-tour');
          }, 500);
        }
      }
    }
  }, [startNextStep]);

  const openModal = () => {
    setIsModalOpen(true);
    // Store state in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('modalOpen', JSON.stringify(true));
    }
    // Small delay to ensure the modal is fully rendered
    setTimeout(() => {
      startNextStep('modal-tour');
    }, 200);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('modalOpen', JSON.stringify(false));
    }
  };

  // Close the tour when the modal is closed
  useEffect(() => {
    if (!isModalOpen && currentTour === 'modal-tour') {
      closeNextStep();
    }
  }, [isModalOpen, currentTour, closeNextStep]);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
