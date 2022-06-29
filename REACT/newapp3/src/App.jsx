import React from 'react';
import './App.scss';

import NavBar from './Components/NavBar';
import CardsCarousel from './Components/CardsCarousel';

import { images } from './images';

// cards array
const cards = [
    {
        content: 'I use PAUSE for the last three months and I found myself more productive than ever.',
        from: 'Bar Levi',
        about: 'Freelance Programmer',
        img: images.ProfileBarLevi,
    },
    {
        content:
            'At first I was worried about the access to camera thing, I read the terms of privacy and heard recommendations from friends so I decided to try the free trial. Since I find myself much more energetic and efficient, highly recommend!.',
        from: 'Melanie Cruise',
        about: 'Engineering Student, MIT',
        img: images.ProfileMelanieCruise,
    },
    {
        content:
            'Since I use pause I feel more alert, I did not know the importance of microbreak and how it can change my work day. The reports have also helped me understand when I am more productive.',
        from: 'Tom Yorke',
        about: 'Communication Student, Harvard',
        img: images.ProfileTomYorke,
    },
    {
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.',
        from: 'Lorem Ipsum',
        about: 'Harta be Pita',
        img: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
    },
    {
        content:
            'Mauris cursus mattis molestie a iaculis. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse.',
        from: 'Henry Pushbutton',
        about: 'Button Pro Press',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
        content: 'Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.',
        from: 'Hipi Hipo',
        about: 'Illusion Bakery Inc',
        img: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
    },
];

export default function App() {
    return (
        <div className='App'>
            <NavBar />
            <div className='content'>
                <h1 className='title'>User Reviews</h1>
                <p className='p-text'>
                    We can talk and talk... but what really matters is <span>your opinion</span> of PAUSE
                </p>
                <div className='cards'>
                    <CardsCarousel cards={cards} />
                </div>
            </div>
        </div>
    );
}
