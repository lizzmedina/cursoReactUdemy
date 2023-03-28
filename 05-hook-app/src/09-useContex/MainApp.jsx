import {Route, Routes, Navigate} from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1> Main App </h1> */}
        <NavBar/>
        <hr />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path= "login" element={<LoginPage/>} />
            <Route path= "about" element={<AboutPage/>} />

            {/* <Route path="*" element={<LoginPage/>} />  
            // Una forma de atajar un error, que no me lleve a la ruta que indiqué, me regresa a una que yo determine, en este caso al login*/}
            <Route path="*" element={<Navigate to= "About"/>} /> 
            
        </Routes>
    </UserProvider>
  )
}
