import GooglePlay from "../assets/google-play.svg"
import AppStore from "../assets/app-store.svg"
import React from 'react';

const Download = () => {
    return (
        <section id="download">
            <div className="container">
                <div className="row download__row">
                    <div className="download__text">
                        <h2 className="download__text__title">
                            Donwload our app to get the most out of it
                        </h2>
                        <p className="download__text__para">
                        Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
                        </p>
                        <div className="download__text__links">
                            <a href="" className="download__text__link">
                                <img src={GooglePlay} alt="" className="download__text__link__img" />
                            </a>
                            <a href="" className="download__text__link">
                                <img src={AppStore} alt="" className="download__text__link__img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download;
