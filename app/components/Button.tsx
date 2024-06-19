interface ButtonProps {
  label: string;
  secondary?: boolean;
  disabled?: boolean;
  outline?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  disabled,
  outline,
  fullWidth,
  large,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          secondary
            ? "bg-white text-black border-black"
            : "text-white bg-sky-500 border-sky-500"
        }
        ${large ? "text-xl px-5 py-3" : "py-2 px-4 text-md"}
        ${outline ? "bg-transparent border-white text-white" : ""}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
