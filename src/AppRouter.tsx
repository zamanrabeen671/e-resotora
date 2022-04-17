import {
    Route, Routes
} from "react-router-dom";
import MainLayout from "./Layout/Main";
import Home from "./pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="food/:id" element={<h1>fsldfkjaslf lskjdflksjflsjflasjdfks</h1>}/>
            </Route>
        </Routes>
    )
}




// return useRoutes([
//     {
//         path: '/',
//         element: <MainLayout />,
//         children: [
//             { path: 'login', element: <h1>Login</h1> },
//             { path: 'register', element: <h1>registration</h1> },
//             { path: '404', element: <h1>404</h1> },
//             { path: '/', element: <Home /> },
//             { path: '*', element: <h1>404</h1> }
//         ]
//     },

//     // { path: '*', element: <Navigate to="/404" replace /> }
// ]);