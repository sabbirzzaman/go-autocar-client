import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import CarDetails from './Pages/CarDetails/CarDetails/CarDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="inventory/:carId" element={<CarDetails />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
