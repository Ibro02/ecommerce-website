import React from "react";

interface IActionText {
  color: string,
  onClick: Function,
  children: string

}

function ActionText({color, onClick,children}:IActionText) {
  return <a
  href="#"
  className={color}
  onClick={() => {
   onClick()
  }}
>
  {children}
</a>;
}

export default ActionText;
