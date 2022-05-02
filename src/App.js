import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import CarDetails from './Pages/CarDetails/CarDetails/CarDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory/ManageInventory';
import AddNewCar from './Pages/ManageInventory/AddNewCar/AddNewCar';
import MyCars from './Pages/MyCars/MyCars/MyCars';
import NotFounded from './Pages/Common/NotFounded/NotFounded';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog/Blog';
import Loading from './Pages/Common/Loading/Loading';
import auth from './firebase.init';
import './App.css';

function App() {
    const [, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="about" element={<AboutUs />}></Route>
                <Route path="blog" element={<Blog />}></Route>
                <Route
                    path="inventory/:carId"
                    element={
                        <RequiredAuth>
                            <CarDetails />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="forget-password"
                    element={<ForgetPassword />}
                ></Route>
                <Route
                    path="manage-inventory"
                    element={
                        <RequiredAuth>
                            <ManageInventory />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="add-new-car"
                    element={
                        <RequiredAuth>
                            <AddNewCar />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="my-cars"
                    element={
                        <RequiredAuth>
                            <MyCars />
                        </RequiredAuth>
                    }
                ></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="*" element={<NotFounded />}></Route>
            </Routes>
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default App;
