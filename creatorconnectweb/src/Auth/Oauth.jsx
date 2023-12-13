
import { Outlet , Navigate} from 'react-router-dom'

const ProtectedRoutes = ({ user }) => {
    console.log("Protectedroutes", user);
    return user? <Outlet user={user} /> : <Navigate to="/landing" user={user} />
};

export default ProtectedRoutes;