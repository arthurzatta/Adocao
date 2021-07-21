import { useRoutes, useNavigate } from 'react-router-dom';
import { Adoptions, Profile, Alerts, Login } from './pages';

export default function Routes(): any {
    const authenticated = true;
    const mainRoutes = authenticated && {
        path: '/',
        element: <Login/>,
        children: [
            { path: '/', element: <Adoptions /> },
            { path: '/profile', element: <Profile /> },
            { path: '/alerts', element: <Alerts /> },
        ]
    }

    const routers = useRoutes([mainRoutes]);

    return <>{routers}</>
}
