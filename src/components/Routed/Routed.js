import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Accommodation from '../Accommodation/Accommodation';
import AddFacilities from '../AddFacilities/AddFacilities';
import BookNow from '../BookNow/BookNow';
import ErrorPage from '../ErrorPage/ErrorPage';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import AddRoom from '../Home/OurRooms/AddRoom/AddRoom';
import MyAccount from '../MyAccount/MyAccount';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Routed.css';

const Routed = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/">
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
                <Route path="/add-facilities">
                    <AddFacilities></AddFacilities>
                </Route>
                <Route path="/add-room">
                    <AddRoom></AddRoom>
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