import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useEffect, useRef } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  required?: boolean;
  autoAdjustHeight?: boolean; // new prop
}

const FloatingLabelInput: FC<FloatingInputProps> = ({
  label,
  id,
  required = false,
  autoAdjustHeight = false,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoAdjustHeight && textareaRef.current) {
      // Adjust height on initial render or value change
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [props.value, autoAdjustHeight]);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="relative pt-4 mt-2.5">
      {autoAdjustHeight ? (
        <textarea
          id={id}
          name={id}
          placeholder={label}
          required={required}
          ref={textareaRef}
          onInput={handleInput}
          className="peer w-full bg-transparent border-b-2 border-gray-300 outline-none
                     text-textDefaultColor text-lg py-1 transition-all duration-200
                     placeholder-transparent focus:pb-1 focus:border-primary resize-none overflow-hidden"
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          name={id}
          placeholder={label}
          required={required}
          className="peer w-full bg-transparent border-b-2 border-gray-300 outline-none 
                     text-textDefaultColor text-lg py-1 transition-all duration-200 
                     placeholder-transparent focus:pb-1 focus:border-primary"
          {...props}
        />
      )}

      <label
        htmlFor={id}
        className="absolute left-0 top-0 text-gray-400 text-base transition-all 
                   duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg 
                   peer-focus:top-0 peer-focus:text-primary 
                   peer-focus:font-semibold peer-focus:text-base"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
