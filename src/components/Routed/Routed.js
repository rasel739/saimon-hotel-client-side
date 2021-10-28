import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Accommodation from '../Accommodation/Accommodation';
import BookNow from '../BookNow/BookNow';
import ErrorPage from '../ErrorPage/ErrorPage';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Routed.css';

const Routed = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/accommodation">
                    <Accommodation></Accommodation>
                </Route>
                <Route path="/gallery">
                    <Gallery></Gallery>
                </Route>
                <Route path="/book-now">
                    <BookNow></BookNow>
                </Route>
                <Route path="/my-account">
                    <MyAccount></MyAccount>
                </Route>
                <Route path="*">
                    <ErrorPage></ErrorPage>
                </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default Routed;