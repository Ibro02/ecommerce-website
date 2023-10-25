import { Navigate, Outlet } from "react-router-dom";
import { router } from "../../main";

interface IProtectedRoutes extends React.HTMLAttributes<HTMLDivElement> {
	children?: JSX.Element;
  }
function ProtectedRoutes() {
const token = localStorage.token;


    router.routes.map((route, key) =>
        {
if (route.children !== undefined)
 return route.children?route.children :<Outlet/>;
        })

return <Navigate to="/"/>
}

export default ProtectedRoutes;
