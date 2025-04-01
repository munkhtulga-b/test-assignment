interface ButtonProps extends React.PropsWithChildren {
  children: React.ReactNode;
  type: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return <button className={type}>{children}</button>;
};

export default Button;
