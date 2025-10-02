import React from 'react';
import CastleImg from '../../assets/Imagens/Home/BackgroundHome.svg';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section className="heroSection">

    <HeroContent />

    {/* Castelo */}
    <div className="heroImage">
    <img src={CastleImg} alt="Castelo" className="castleImg" />
    </div>
    </section>
  );
};

export default HeroSection;
