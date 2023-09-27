import React, { useState } from "react";


const AccordionLogement = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-logement ${isOpen ? "open" : "closed"}`}>
            <div className="accordion-header-logement" onClick={toggleAccordion}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`} />
            </div>
            <div className={`content ${isOpen ? "opening show" : "closing"}`}>
                {children}
            </div>
        </div>
    );
};

export default AccordionLogement;
