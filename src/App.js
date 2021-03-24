import logo from './logo.svg';
import './App.css';

// ниже компоненты!!!
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
    return (

        <div className="app_wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
