import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Header/Navigation';
import jsonData from '../../data/data.json';
import img1 from '../../assets/images/img1.png';


const Home = () => {
    const housingItems = jsonData.slice(-6).map((item, index) => {
        return (
            <Link to={`/logement/${item.id}`} key={index} className='card'>
                <img className='card-img' src={item.cover} alt={item.title} />
                <h3 className='title'>{item.title}</h3>
            </Link>
        )
    });
    return (
        <div>
            <Navigation />
            <img className="banner" src={img1} alt='' />
            <span className='homeText'>Chez vous, partout et ailleurs</span>
            <div className="housing-gallery">
                {housingItems}
            </div>
        </div>
    );
};

export default Home;
