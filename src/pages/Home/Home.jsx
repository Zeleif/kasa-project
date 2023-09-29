import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Header/Navigation';
import jsonData from '../../data/data.json';




const Home = () => {
    const housingItems = jsonData.slice(0, 6).map((item, index) => {

        return (
            <Link to={`/logement/${item.id}`} key={item.id} className='card'>

                <img className='card-img' src={item.cover} alt={item.title} />
                <h3 className='title'>{item.title}</h3>

            </Link>
        )
    });
    return (
        <div>
            <Navigation />
            <img className="banner" src={require('../../assets/images/img1.png')} alt="" />
            <span>Chez vous, partout et ailleurs</span>
            <div className="housing-gallery">
                {housingItems}
            </div>
        </div>
    );
};

export default Home;