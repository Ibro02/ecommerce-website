import React, {useState, useContext} from "react";

export const SignInMode:any = React.createContext(true);
const ModeUpdateContext = React.createContext(()=>{});
function ToggleSignInMode({children}:any):JSX.Element {
 const [logIn, setLogin] = useState(true);
  function toggleMode(){
    setLogin(logIn=>!logIn)
  }
    return(<SignInMode.Provider value={logIn}>
        <ModeUpdateContext.Provider value={toggleMode}>
        {children}
        </ModeUpdateContext.Provider>
        </SignInMode.Provider>
        );
}

export default ToggleSignInMode;
