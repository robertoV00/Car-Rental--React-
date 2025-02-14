import React, { useEffect, useState } from 'react';
import axios from "axios"
import Model from "./UI/Model";
import ModelSkeleton from './UI/ModelSkeleton';


const VehicleModels = () => {
    
    const [carModels, setCarModels] = useState([])
    async function fetchModels() {

        const {data} = await axios.get("https://car-rental-api.up.railway.app/car")
        const models = data.data
        
        setCarModels(models)
    }
    
    useEffect(() => {
        fetchModels()
    }, [])
    // [] we will only fetch the data once it renders

    return (
        <section id="models">
            <div className="container">
                <div className="row models__row">
                    <div className="models__header">
                        <h2 className="models__header__title">
                            Vehicle Models
                        </h2>
                        <select defaultValue="" className="models__header__sort">
                            <option value="" disabled className="models__header__sort__options">Sort</option>
                            <option value="HIGH_TO_LOW" className="models__header__sort__options">Price (high - low) </option>
                            <option value="LOW_TO_HIGH" className="models__header__sort__options">Price (low - high)</option>
                            <option value="rating" className="models__header__sort__options">Rating</option>
                        </select>
                    </div>
                        <div className="models__list">
                            { carModels.length > 0 ? ( carModels.map((model) =>
                                <Model model={model} key={model.id}/>
                            )) : (
                            new Array(20).fill(0).map(() => <ModelSkeleton />)
                        )}
                        </div>
                </div>
            </div>
        </section>
    );
}

export default VehicleModels;
