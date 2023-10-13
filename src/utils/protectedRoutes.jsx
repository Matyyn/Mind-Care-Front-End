import { Navigate, Outlet } from "react-router";

const Auth =()=>{
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('accessToken')
    if(refreshToken !=='' && accessToken!==''){
        return true
    }    
}
const ProtectedRoutes = ()=>{
    const isAuth =  Auth()
    return isAuth ?<Outlet/>:<Navigate to="/signin"/>;
}
export default ProtectedRoutes;