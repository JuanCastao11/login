import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext"

const protectedRoute = () => {
  const {user,isAuthenticathed} = useAuth();
  console.log(user,isAuthenticathed)
  if(!isAuthenticathed) return <Navigate to= '/login' replace />

  
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default protectedRoute
