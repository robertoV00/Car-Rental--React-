import React, { useEffect, useState } from 'react';
import ModelHero from '../components/ModelHero';
import VehicleModels from '../components/VehicleModels';
import Booking from '../components/Booking';
import axios from 'axios';

const Models = () => {

    const [carModels, setCarModels] = useState([])
    const [bookingOpen, setBookingOpen] = useState(false)
        // [] we will only fetch the data once it renders
    async function fetchModels() {
    
            const {data} = await axios.get("https://car-rental-api.up.railway.app/car")
            const models = data.data
            
            setCarModels(models)
        }
        
        useEffect(() => {
            fetchModels()
        }, [])

        //now to use these, pass it through as a prop and pull it through the VehicleModels component

    return (
        <>
            <Booking carModels={carModels} bookingOpen={bookingOpen} setBookingOpen={setBookingOpen}/>
            <ModelHero />
            <VehicleModels carModels={carModels} setCarModels={setCarModels} setBookingOpen={setBookingOpen}/>
        </>
    );
}

export default Models;
