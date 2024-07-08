export const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "35%",
    maxHeight: "70vh",
  },
  overlay: {
    backgroundColor: "rgba(128, 128, 128, 0.8)",
  },
};

export const handleClick = (setIsOpen: (value: boolean) => void, isOpen: boolean) => {
  setIsOpen(isOpen);
};
