import { useEffect, useState } from "react";
interface IDropDown
{
[key:string]: string|IDropDown|object;
list: IDropdownList[];
getValue: Function;
}
export interface IDropdownList 
	{
        [key: string]: string;
		name: string;
	}
function Dropdown({list,getValue}:IDropDown) {
    const [text, setText] = useState("Options");
    const [value, setValue] = useState(1);
    useEffect(()=>{
  //  console.log(value)
    getValue(value)
    },[value])
const [isClicked, setClicked] = useState(false);
  return <div className="w-full"><div className="  relative text-left w-auto">
  <div>
    <button type="button" className=" inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={()=>setClicked(!isClicked)}>
      {text}
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
      </svg>
    </button>
  </div>
 {isClicked&& <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
    <div className="py-1" role="none">
    {list.map((element:any,key:number)=>
    {
      return <a key={key} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={key} id="menu-item-0" onClick={(e)=>{setText(e.currentTarget.innerText);setValue(++key);setClicked(false)}}>{element.name}</a>
    })}

    </div>

  </div>}
</div></div>;
}

export default Dropdown;
