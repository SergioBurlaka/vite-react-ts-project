import React, { ReactNode } from "react";

type ButtonTypes = {
  onClick: () => void;
  children?: ReactNode;
};

const Button = ({ onClick, children }: ButtonTypes) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className=" h-10 w-10 flex items-center justify-center    text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
    >
      {children}
    </button>
  );
};

export default Button;
