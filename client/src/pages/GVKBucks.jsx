import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from '../components/Content';
import Sci from '../components/Sci';
import ThumbsContainer from '../components/ThumbsContainer';

const GVKBucks = () => {
    return (
        <section>
            <Header />
            <Content />
            <ThumbsContainer />
            <Sci />
            <Footer />
        </section>
    );
};

export default GVKBucks;
