import { useRoutes, Navigate } from 'react-router-dom';
import { Adoptions, Profile, Alerts, Login, SignUp } from './pages';

export default function Routes(): any {
    const authenticated = true;
    const mainRoutes = {
        path: '/',
        element: <Login />,
        children: [
            { path: 'adoptions', element: <Adoptions /> },
            { path: 'profile', element: <Profile /> },
            { path: 'alerts', element: <Alerts /> },
            // {path: '*', element: <Error/>}
        ]
    };

    const otherRoutes = [
        { path: '/', element: <Login /> },
        { path: 'signUp', element: <SignUp /> }
    ];

    const routers = useRoutes([mainRoutes, ...otherRoutes]);

    return <>{routers}</>
}

