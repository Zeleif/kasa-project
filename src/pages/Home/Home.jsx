import React from 'react';
import Navigation from '../../components/Header/Navigation';
import jsonData from '../../data/data.json';





const Home = () => {
    const housingItems = jsonData.map(item => (
        <navLink to={`/logement/${item.id}`} key={item.id}>
            <div className="card">
                <img className='card-img' src={item.cover} alt={item.title} />
                <h3>{item.title}</h3>
            </div>
        </navLink>
    ));
    return (
        <div>
            <Navigation />
            <img className="banner" src={require('../../assets/images/img1.png')} alt="" />
            <span>Chez vous, partout et ailleurs</span>
            <br />
            <div className="housing-gallery">
                {housingItems}
            </div>
        </div>
    );
};

export default Home;