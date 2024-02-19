import React from 'react';

const ThumbsContainer = () => {
    const handleThumbnailClick = (imageSrc, circleColor) => {
        imageSlider(imageSrc);
        changeCircleColor(circleColor);
    };

    const imageSlider = (anything) => {
        const starbucksImage = document.querySelector('.starbucks');
        if (starbucksImage) {
            starbucksImage.src = anything;
        }
    };

    const changeCircleColor = (color) => {
        const circleElement = document.querySelector('.circle');
        if (circleElement) {
            circleElement.style.background = color;
        }
    };

    return (
        <ul className="thumb">
            <li><img src="/images/thumb1.png" onClick={() => handleThumbnailClick('/images/img1.png', '#017143')} /></li>
            <li><img src="/images/thumb2.png" onClick={() => handleThumbnailClick('/images/img2.png', '#eb7495')} /></li>
            <li><img src="/images/thumb3.png" onClick={() => handleThumbnailClick('/images/img3.png', '#d752b1')} /></li>
        </ul>
    );
};

export default ThumbsContainer;
