import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route  } from "react-router-dom";
import RegisterPage from './Page/RegisterPage';
import LoginPage from './Page/LoginPage';
import CreatePage from './OrderPages/CreatePage';
import OptionsPage from './OrderPages/OptionsPage';
import OrderList from './OrderPages/OrderList';

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/orderlist" element={<OrderList />} />
        <Route path="/option" element={<OptionsPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route  path="/" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
