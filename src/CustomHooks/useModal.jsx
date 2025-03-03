import { useCallback, useState } from "react";

//Custom Hook to close , open modal and  handle the case when user click out side it should close
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
