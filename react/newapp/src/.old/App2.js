import React from 'react';
import './App.css';
import Post from './Components/Post.jsx';

export default function App() {
    const posts = [
        {
            title: 'First',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, incidunt!',
            bg: 'green',
            src: 'https://via.placeholder.com/150/cde4c1',
        },
        {
            title: 'Second',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, odio.',
            bg: 'red',
            src: 'https://via.placeholder.com/150/65ac19',
        },
    ];

    return (
        <div>
            {posts.map((post, i) => {
                return <Post key={i} title={post.title} details={post.details} src={post.src} bg={post.bg} />;
            })}
        </div>
    );
}
