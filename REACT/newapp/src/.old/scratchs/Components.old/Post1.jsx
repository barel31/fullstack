import React from 'react';
import './Post.css';

export default function Post(post) {
    const avg = post.numbers.reduce((sum, val) => sum + val) / post.numbers.length;

    return (
        <div className="post">
            <img className='postLogo' src={post.src} alt="img" />
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <h5>{post.price}</h5>
            <h6>AVG:{avg}</h6>
        </div>
    );
}
