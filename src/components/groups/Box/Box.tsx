import Container from "../../../utils/containers/Container/Container";

interface IBox extends React.HTMLAttributes<HTMLDivElement> {

  }
function Box({children}:IBox) {
  return <div className="bg-slate-100 flex p-7 rounded-md shadow-2xl">
    {children}
  </div>;
}

export default Box;
