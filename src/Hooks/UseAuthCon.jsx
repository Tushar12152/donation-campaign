import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const UseAuthCon = () => {
const all=useContext(AuthContext)

    return all
};

export default UseAuthCon;