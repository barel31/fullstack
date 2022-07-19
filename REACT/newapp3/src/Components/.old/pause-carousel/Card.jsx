import React from 'react';
import { motion } from 'framer-motion';
import './Card.scss';

import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as LinkedIn } from '../svg/linkedin.svg';

export default function Card({ card }) {
    return (
        <div className='Card'>
            <p className='card-content'>" {card.content} "</p>

            <div className='wave-background'>
                <div className='card-image'>
                    <img src={card.img} alt={card.from} />
                </div>
                <p className='card-from'>{card.from}</p>
                <p className='card-about'>{card.about}</p>
                <div className='card-social-links'>
                    <motion.a href='/' whileHover={{ scale: 1.1 }}>
                        <LinkedIn />
                    </motion.a>
                    <motion.a href='/' whileHover={{ scale: 1.1 }}>
                        <Facebook />
                    </motion.a>
                </div>
            </div>
        </div>
    );
}
