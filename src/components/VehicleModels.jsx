import React, { useEffect, useState } from 'react';
import axios from "axios"
import Model from "./UI/Model";
import ModelSkeleton from './UI/ModelSkeleton';


const VehicleModels = ({carModels, setCarModels, setBookingOpen, setSelectedModel}) => {
    const [sort, setSort] = useState("")
    // what ever useState("") that determines what the select statement shows
    function sortModels() {
        //If sort === high to low
        if(sort === "HIGH_TO_LOW") {
            setCarModels(carModels.slice().sort((a, b) => b.per_day_price - a.per_day_price)) //takes the carModel array, creates a clone with slice(), then we sort the clone array instead
        }
        //If sort === low to high
        else if(sort === "LOW_TO_HIGH") {
            setCarModels(carModels.slice().sort((a,b) => a.per_day_price - b.per_day_price))
        }
        //If sort === rating
        else if(sort === "RATING") {
            setCarModels(carModels.slice().sort((a, b) => b.rating - a.rating))
        }
    }

    useEffect(() => {
        sortModels()
    }, [sort])
    //whenever value of the sort state is changed, the function is ran

    return (
        <section id="models">
            <div className="container">
                <div className="row models__row">
                    <div className="models__header">
                        <h2 className="models__header__title">
                            Vehicle Models
                        </h2>
                        <select onChange={(event) => setSort(event.target.value)} value={sort} className="models__header__sort">
                            <option value="" disabled className="models__header__sort__options">Sort</option>
                            <option value="HIGH_TO_LOW" className="models__header__sort__options">Price (high - low) </option>
                            <option value="LOW_TO_HIGH" className="models__header__sort__options">Price (low - high)</option>
                            <option value="RATING" className="models__header__sort__options">Rating</option>
                        </select>
                    </div>
                        <div className="models__list">
                            { carModels.length > 0 ? ( carModels.map((model) =>
                                <Model model={model} key={model.id} setBookingOpen={setBookingOpen} setSelectedModel={setSelectedModel}/>
                            )) : (
                            new Array(20).fill(0).map((_, index) => <ModelSkeleton key={index}/>)
                        )}
                        </div>
                </div>
            </div>
        </section>
    );
}

export default VehicleModels;
