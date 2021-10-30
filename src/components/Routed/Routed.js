import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';
import Accommodation from '../Accommodation/Accommodation';
import AddFacilities from '../AddFacilities/AddFacilities';
import BookNow from '../BookNow/BookNow';
import ErrorPage from '../ErrorPage/ErrorPage';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
import AddRoom from '../Home/OurRooms/AddRoom/AddRoom';
import RoomDetails from '../Home/OurRooms/RoomDetails/RoomDetails';
import Login from '../Login/Login';
import MyAccount from '../MyAccount/MyAccount';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Routed.css';

const Routed = () => {
    return (
      <AuthProvider>
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
            <PrivateRoute path="/book-now">
              <BookNow></BookNow>
            </PrivateRoute>
            <Route path="/my-account">
              <MyAccount></MyAccount>
            </Route>
            <Route path="/add-facilities">
              <AddFacilities></AddFacilities>
            </Route>
            <Route path="/add-room">
              <AddRoom></AddRoom>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/room-details/:roomId">
              <RoomDetails></RoomDetails>
            </Route>
            <Route path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    );
};

export default Routed;