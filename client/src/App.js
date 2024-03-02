import React, { useState, useEffect } from 'react';
import GVKBucks from './pages/GVKBucks.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

function App() {
  const { width, height } = useWindowSize();
  const [stopConfetti, setStopConfetti] = useState(false);

  useEffect(() => {
    toast.success('Thank you for visiting my GVKBucks - GVK', {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
      },
    });

    // Stop confetti after 5 seconds (5000 milliseconds)
    const confettiTimer = setTimeout(() => {
      setStopConfetti(true);
    }, 5000);

    // Clear the timer when the component unmounts or when the effect runs again
    return () => clearTimeout(confettiTimer);
  }, []);
  const confettiConfig = {
    gravity: 0.05, // Adjust this value to change the speed, lower value slows down
    numberOfPieces: 200,
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {!stopConfetti && <Confetti width={width} height={height} {...confettiConfig} className='confetti' />}
      <GVKBucks />
    </>
  );
}

export default App;
