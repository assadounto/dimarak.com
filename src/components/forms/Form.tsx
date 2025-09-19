import React, { useState } from "react";
import { FiEye, FiEyeOff, FiSearch } from "react-icons/fi";

interface FormProps {
  placeholder: string;
  value?: string;
  containerStyle?: string;
  label?: string;
  icon?: boolean;
  formStyle?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelFontSize?: number;
}

const Form = ({
  labelFontSize = 11,
  type,
  icon = false,
  placeholder = "",
  value,
  containerStyle = "",
  label,
  formStyle = "h-[3rem]",
  onChange,
  ...props
}: FormProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(type === "password");

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <div className={`${containerStyle}`}>
      {label && (
        <div className="">
          <span className="" style={{ fontSize: `${labelFontSize}px` }}>
            {label}
          </span>
        </div>
      )}
      <div
        className={`min-h-[3rem] border-solid py-2 ${
          icon || type === "password" ? "flex items-center" : ""
        } mt-2 rounded-[10px] bg-sidebar-accent/40 px-4 ${formStyle} w-full`}
      >
        {icon && (
          <div className="mr-2">
            <FiSearch size={24} color="gray" />
          </div>
        )}

        <div className="flex w-full items-center">
          <input
            type={type === "password" && secureTextEntry ? "password" : "text"}
            placeholder={placeholder}
            className="flex-1 bg-transparent px-1 text-[16px] text-black outline-none placeholder:text-[14px] dark:text-white"
            value={value}
            onChange={onChange}
            {...props}
          />
        </div>
        {type === "password" && (
          <button onClick={toggleSecureEntry} className="ml-2">
            {secureTextEntry ? (
              <FiEyeOff size={20} color="#575555" />
            ) : (
              <FiEye size={20} color="#575555" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
