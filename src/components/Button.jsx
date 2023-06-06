import clsx from "clsx";

function getClassName({ className }) {
  return "text-white", className;
}
const sizes = { small: "px-4 py-3", medium: "px-6 py-4", large: "w-full px-4 py-3" };
const variants = {
    primary: "",
    secondary: "",
    dark: "",
}
const Button = ({
    children, 
    className, 
    size = "small",
    variant = "primary", 
    ...rest
    }) => {
    
  return 
    <button className={
        clsx(
            sizes{size}, 
            variants{variant}, 
            getClassName({className}))} 
            {...rest}>
                {children}
    </button>;
};

export default Button;
