import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Импортируем Provider из react-redux
import store from './redux/store'; // Импортируем наш Redux store

import './styles/animations.css';
import './styles/main.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/herosection.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './pages/Account';
import RecipePage from './components/RecipePage';
import CartComponent from './redux/CartComponent';

const App: React.FC = () => {
    return (
        <Provider store={store}> {/* Обернем приложение в Provider и передадим в него store */}
            <Router>
                <Navbar />
                <div className="container main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/recipe/:id" element={<Recipe />} />
                        <Route path="/meal/:id" element={<RecipePage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/account/:username" element={<Account />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </Provider>
    );
};
export default App;
