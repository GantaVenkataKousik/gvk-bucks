import React, { useState, useEffect } from 'react';

const Content = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);
    const [currentCharacters, setCurrentCharacters] = useState('');

    const famousWords = ['GVK Bucks', 'famous', 'GVK coffee'];

    useEffect(() => {
        const interval = setInterval(() => {
            updateTitle();
        }, 300);

        return () => clearInterval(interval);
    }, [currentCharacterIndex, isErasing, currentWordIndex]);

    const updateTitle = () => {
        const currentWord = famousWords[currentWordIndex];
        let updatedCharacters;

        if (isErasing) {
            updatedCharacters = currentWord.slice(0, currentCharacterIndex);
            if (currentCharacterIndex === 0) {
                setIsErasing(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % famousWords.length);
            }
            setCurrentCharacterIndex((prevIndex) => prevIndex - 1);
        } else {
            updatedCharacters = currentWord.slice(0, currentCharacterIndex + 1);
            if (currentCharacterIndex === currentWord.length - 1) {
                setIsErasing(true);
            }
            setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
        }

        setCurrentCharacters(updatedCharacters);
    };

    return (
        <div className="content">
            <div className="textBox">
                <h2 id="title">It's not just a Coffee <br />It's <span>{currentCharacters + '|'}</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, numquam sed alias harum corporis
                    expedita ex. Saepe voluptates ipsam dignissimos laudantium! Neque, amet eos tenetur illum voluptas
                    ad culpa, veritatis molestiae perspiciatis explicabo voluptatem! Vitae blanditiis qui quos quidem
                    assumenda.</p>
                    <div className='learnmore'>

                    <a href="#" className="learn-more button">Learn More</a>
                    </div>
            </div>
            <div className="imgBox">
                <a href="#"><img src="/images/img1.png" alt="A coffee" className="starbucks" /></a>
            </div>
        </div>
    );
};

export default Content;
