import { useModal } from '@/contexts/ModalContext';

/**
 * Custom hook for using the demo modal
 * This hook provides a simple interface for opening and closing the demo modal
 * and checking its current state.
 */
export function useModalDemo() {
  const { isModalOpen, openModal, closeModal } = useModal();

  /**
   * Check if the modal should be open based on localStorage
   * This is useful for components that need to know if the modal
   * should be open without having to subscribe to the context.
   */
  const checkPersistedModalState = (): boolean => {
    if (typeof window !== 'undefined') {
      const storedModalState = localStorage.getItem('modalOpen');
      return storedModalState ? JSON.parse(storedModalState) : false;
    }
    return false;
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    checkPersistedModalState,
  };
}
