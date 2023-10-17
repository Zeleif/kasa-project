import React, { useState } from 'react';


function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return pictures.length - 1;
            } else {
                return prevIndex - 1
            }
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === pictures.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            };
        });
    };
    const ShowButtons = pictures.length > 1;

    return (
        <div className="slider-container">
            {ShowButtons && (
                <button onClick={prevSlide} className="prev-button">
                    <i className="fas fa-chevron-left"></i>
                </button>
            )}
            <div className="image-container">
                {pictures.map((image, index) => (
                    <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                        <img src={image} alt={`Title.logement ${index}`} />
                    </div>
                ))}
            </div>
            {ShowButtons && (
                <button onClick={nextSlide} className="next-button">
                    <i className="fas fa-chevron-right"></i>
                </button>
            )}
            <div className="container-number">
                {pictures.length > 1 && (
                    <p className="photo-number">
                        {currentIndex + 1} / {pictures.length}
                    </p>

                )}
            </div>
        </div>
    );
}


export default Slider;
