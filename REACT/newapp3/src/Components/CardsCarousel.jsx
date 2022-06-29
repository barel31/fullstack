import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Card from './Card';
import './CardsCarousel.scss';

export default function CardsCarousel({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [xDirection, setXDirection] = useState(200);
    const [cardVariantName, setCardVariantName] = useState('stop');

    const currentIndexPrevius = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    const currentIndexPrior = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;

    // Slide cards every 10 secs
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex(currentIndexPrior);
            startCardAnimation();
        }, 10000);

        // Clear The interval on unmount
        return () => clearInterval(sliderInterval);
    }, []);

    const startCardAnimation = () => {
        setCardVariantName('start');
        const animationTimeOut = setTimeout(() => {
            clearTimeout(animationTimeOut);
            setCardVariantName('stop');
        }, 100);
    };

    // Decalare variants to for card animation
    const cardVariant = {
        previous: {
            x: [xDirection, 0],
            scale: [xDirection < 0 ? 0.7 : 1, 0.8],
            opacity: [xDirection < 0 ? 0.1 : 1, 0.6],
            transition: { duration: 0.3 },
        },
        prior: {
            x: [xDirection, 0],
            scale: [xDirection > 0 ? 0.7 : 1, 0.8],
            opacity: [xDirection > 0 ? 0.1 : 1, 0.6],
            transition: { duration: 0.3 },
        },
        active: {
            x: [xDirection, 0],
            scale: [0.9, 1],
            opacity: [0.6, 1],
            transition: { duration: 0.3 },
        },
        active2: {
            x: 0,
            scale: 1,
            opacity: 1,
        },
        stop: { x: 0, scale: 0.8, opacity: 0.6 },
    };

    return (
        <div className='CardsCarousel'>
            <div className='cards'>
                <motion.div
                    className='previous-card'
                    variants={cardVariant}
                    animate={cardVariantName === 'start' ? 'previous' : 'stop'}>
                    <Card card={cards[currentIndexPrevius]} />
                </motion.div>
                <div className='active-card'>
                    <motion.div variants={cardVariant} animate={cardVariantName === 'start' ? 'active' : 'active2'}>
                        <Card card={cards[currentIndex]} />
                    </motion.div>
                </div>
                <motion.div
                    className='prior-card'
                    variants={cardVariant}
                    animate={cardVariantName === 'start' ? 'prior' : 'stop'}>
                    <Card card={cards[currentIndexPrior]} />
                </motion.div>
            </div>
            <div className='cards-btns'>
                <div
                    onClick={() => {
                        setCurrentIndex(currentIndexPrevius);
                        setXDirection(xDirection === 200 ? 201 : 200);
                        startCardAnimation();
                    }}>
                    <HiChevronLeft />
                </div>
                <div
                    onClick={() => {
                        setCurrentIndex(currentIndexPrior);
                        setXDirection(xDirection === -200 ? -201 : -200);
                        startCardAnimation();
                    }}>
                    <HiChevronRight />
                </div>
            </div>
        </div>
    );
}
