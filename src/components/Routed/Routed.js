import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';
import Accommodation from '../Accommodation/Accommodation';
import AddFacilities from '../AddFacilities/AddFacilities';
import AdminPenel from '../AdminPenel/AdminPenel';
import UpdateUserStatus from '../AdminPenel/UpdateUserStatus/UpdateUserStatus';
import BookNow from '../BookNow/BookNow';
import ErrorPage from '../ErrorPage/ErrorPage';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';
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
            <Route path="/adminPanel">
              <AdminPenel></AdminPenel>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/room-details/:roomId">
              <RoomDetails></RoomDetails>
            </Route>
            <Route path="/update-user-status/:statusId">
              <UpdateUserStatus></UpdateUserStatus>
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