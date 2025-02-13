import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarModel from "../assets/model-img.png"
import React from 'react';
import { faCar, faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";

const VehicleModels = () => {
    return (
        <section id="models">
            <div className="container">
                <div className="row models__row">
                    <div className="models__header">
                        <h2 className="models__header__title">
                            Vehicle Models
                        </h2>
                        <select className="models__header__sort">
                            <option value="" selected disabled className="models__header__sort__options">Sort</option>
                            <option value="HIGH_TO_LOW" className="models__header__sort__options">Price (high - low) </option>
                            <option value="LOW_TO_HIGH" className="models__header__sort__options">Price (low - high)</option>
                            <option value="rating" className="models__header__sort__options">Rating</option>
                        </select>
                    </div>
                        <div className="models__list">
                            <div className="model">
                                <img src={CarModel} alt="" className="model__img" />
                                <div className="models__details model__details-1">
                                    <h3 className="model__details__name">
                                        Toyota Camry
                                    </h3>
                                    <h4 className="model__details__price">
                                        $50
                                        <span className="model__details__price__span">
                                            per day
                                        </span>
                                    </h4>
                                </div>
                                <div className="models__details model__details-2">
                                    <div className="model__detail">
                                        <FontAwesomeIcon icon={faStar} className="model__detail__icon"/>
                                        <span className="model__detail__text">
                                            4.2 / 5
                                        </span>
                                    </div>
                                    <div className="model__detail model__detail-right">
                                        <FontAwesomeIcon icon={faCar} className="model__detail__icon"/>
                                        <span className="model__detail__text">
                                            Petrol
                                        </span>
                                    </div>
                                    <div className="model__detail">
                                        <FontAwesomeIcon icon={faCar} className="model__detail__icon"/>
                                        <span className="model__detail__text">
                                            Toyota
                                        </span>
                                    </div>
                                    <div className="model__detail model__detail-right">
                                        <FontAwesomeIcon icon={faCar} className="model__detail__icon"/>
                                        <span className="model__detail__text">
                                            Automatic
                                        </span>
                                    </div>
                                </div>
                                <button className="model__btn">
                                    <span className="model__btn__span">Book Ride</span>
                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default VehicleModels;
