import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import GreatLocation from './GreatLocation/GreatLocation';
import './Home.css';
import HotelSlider from './HotelSlider/HotelSlider';
import OurFacilities from './OurFacilities/OurFacilities';
import OurRooms from './OurRooms/OurRooms';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <HotelSlider></HotelSlider>
            <OurFacilities></OurFacilities>
            <GreatLocation></GreatLocation>
            <OurRooms></OurRooms>
            <PhotoGallery></PhotoGallery>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;