import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedLayout = ({children}) => {
    const {user}=useSelector((state)=>state.user);

    if(!user){
        return <Navigate to='/landing'/> 
    }
    else
        return children;
}

export default ProtectedLayout;
