import {useState} from "react";
import Container from "../../../utils/containers/Container/Container";
import { IInputProps, ProfileProps } from "../../../constants/Mock";
import ProfileText from "../../common/ProfileText/ProfileText";
import Input from "../../common/input/Input";

function Form({objectProps,object}:{objectProps:Array<IInputProps>, object:IInputProps}) {
	const [myObject, setMyObject] = useState<any>({});
	const [isEnabled, enableInput] = useState(true);
    const displayInput = (name: string) => {
		for (const prop in object)
			if (prop === name)
			if (object[`${name}`] !== null)
				if (object[`${name}`].length !== 0) return object[`${name}`];

		return `No ${name}`;
	};
    const updateObjectProperty = (propertyName: string, propertyValue: string | number) => {
        const updatedObject = { ...myObject };
    
        updatedObject[propertyName] = propertyValue;
        if (updatedObject?.cityId === "")
        updatedObject.cityId = null;
        setMyObject(updatedObject);
      };
  
  return <form>
<Container className="flex flex-col w-full m-auto items-baseline justify-evenly flex-wrap">
      {objectProps.map((prop, key) => (
          <Container className=" flex w-2/3 justify-between m-auto">
              <ProfileText>{prop.title}</ProfileText>

              <Input
                  key={key}
                  name={prop.name}
                  disabled={isEnabled}
                  placeholder={`${isEnabled ? displayInput(prop.name) : ""}`}
                  color="text-slate-800"
                  getValue={(e:string)=>updateObjectProperty(prop.name,e)}
                  >
                  {!isEnabled ? displayInput(prop.name) : ""}
              </Input>
          </Container>
      ))}
  </Container>
      </form>;
}

export default Form;
