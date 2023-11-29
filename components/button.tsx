"use client";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const Button = ({ ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${props.className}
      flex flex-row relative justify-center items-center gap-2 py-3 px-6 outline-none
     rounded-full`}
    >
      <span>{props.title}</span>
      <span>{props.icon}</span>
    </button>
  );
};

export default Button;
