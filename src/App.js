import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import './App.css';
import CarDetails from './Pages/CarDetails/CarDetails/CarDetails';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="inventory/:carId" element={<CarDetails />}></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
