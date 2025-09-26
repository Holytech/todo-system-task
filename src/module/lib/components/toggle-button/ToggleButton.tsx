import { useState } from "react";

interface ToggleButtonProps {
  initialState?: boolean;
  onToggle?: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialState = false,
  onToggle,
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn((prev) => !prev);

    if (!onToggle) return;
    onToggle();
  };

  return (
    <button
      onClick={toggle}
      className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 cursor-pointer ${
        isOn ? "bg-gray-900" : "bg-gray-300"
      }`}
      aria-checked={isOn}
      role="switch"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};
