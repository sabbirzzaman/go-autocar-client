import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import CarDetails from './Pages/CarDetails/CarDetails/CarDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import './App.css';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory/ManageInventory';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route
                    path="inventory/:carId"
                    element={
                        <RequiredAuth>
                            <CarDetails />
                        </RequiredAuth>
                    }
                ></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="forget-password" element={<ForgetPassword />}></Route>
                <Route
                    path="mange-inventory"
                    element={
                        <RequiredAuth>
                            <ManageInventory />
                        </RequiredAuth>
                    }
                ></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
