import React from 'react';
import Navigation from '../../components/Header/Navigation';



const Home = () => {
    return (
        <div>
            <Navigation />
            <img src={require('../../assets/images/img1.png')} alt="" />
            <span>Chez vous, partout et ailleurs</span>
        </div>
    );
};

export default Home;