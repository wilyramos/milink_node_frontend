import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinksProfileView from "./views/LinksProfileView";
import ProfileView from "./views/ProfileView";
import HandleView from "./views/HandleView";
import NotFoundView from "./views/NotFoundView";
import HomeView from "./views/HomeView";


export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<LoginView />} />
                <Route path="/auth/register" element={<RegisterView />} />
            </Route>

            <Route path="/admin" element={<AppLayout />}>
                <Route index={true} element={<LinksProfileView />} />
                <Route path="profile" element={<ProfileView />} />
            </Route>

            {/* Ruta para el handle */}
            <Route path="/:handle" element={<AuthLayout />}>
                <Route element={<HandleView />} index={true}/>
            </Route>

            <Route path='/' element={<HomeView />} />               

            {/* Ruta para el 404 */}

            <Route path="/404" element={<AuthLayout />}>
                <Route element={<NotFoundView />} index={true}/>
            </Route>

            {/* Ruta para el 404 en general */}           
            
        </Routes>
    </BrowserRouter>
  );
}
