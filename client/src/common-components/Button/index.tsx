import { useMemo } from "react";
export const enum ButtonType {
  Submit = "submit",
  Cancel = "cancel",
}

type Props = {
  buttonType: ButtonType;
  buttonText: string;
  className?: string;
  onClick: () => void;
};

const defaultClass =
  "w-[140px] h-[50px] rounded-[30px]  hover:shadow-transparent hover:translate-y-0.5 border-[1px] text-xl";
const Button = ({ buttonType, buttonText, onClick, className }: Props) => {
  const style: string = useMemo(() => {
    if (buttonType === "cancel") {
      return `${defaultClass} ${className} bg-gray-grad-dark shadow-gray text-white border-gray-100`;
    }

    return `${defaultClass} ${className} bg-submitBtn shadow-org text-btn-submit border-yellow-200`;
  }, [buttonType, className]);

  return (
    <button className={style} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
