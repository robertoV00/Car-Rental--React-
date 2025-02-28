import React, { useEffect, useState } from 'react';
import ModelHero from '../components/ModelHero';
import VehicleModels from '../components/VehicleModels';
import Booking from '../components/Booking';
import axios from 'axios';
import SuccessPopup from '../components/UI/SuccessPopup';

const Models = () => {
    const [selectedModel, setSelectedModel] = useState("")
    const [carModels, setCarModels] = useState([])
    const [successOpen, setSuccessOpen] = useState(false)
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
            <SuccessPopup successOpen={successOpen}/>
            <Booking 
                carModels={carModels} 
                bookingOpen={bookingOpen} 
                setBookingOpen={setBookingOpen}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                setSuccessOpen={setSuccessOpen}    
            />
            <ModelHero />
            <VehicleModels carModels={carModels} setCarModels={setCarModels} setBookingOpen={setBookingOpen} setSelectedModel={setSelectedModel} />
        </>
    );
}

export default Models;
