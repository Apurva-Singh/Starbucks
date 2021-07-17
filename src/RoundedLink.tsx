import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>{
theme?: 'white'|'black';

}
const RoundedLink:React.FC<Props>=({theme, ...rest})=> {
  const themeClasses =
    theme === "white"
      ? "text-white border-white"
      : "text-black border-black";
  return (
    <a
    {...rest}
      className={
        "border font-semibold rounded-full flex-shrink-0 px-4 py-1 tracking-wide " +
        themeClasses
      }
  
    >
     
    </a>
  );
}
RoundedLink.defaultProps={
  theme:"black",
};

export default RoundedLink;
