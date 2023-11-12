import Container from "../../../utils/containers/Container/Container";

interface IBox extends React.HTMLAttributes<HTMLDivElement> {
rounded: boolean
  }
function Box({children,rounded}:IBox) {
  return <div className={` bg-slate-100 flex p-4 ${rounded&&"rounded-md"} mt-20 mb-0 shadow-2xl`}>
    {children}
  </div>;
}

export default Box;
