import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <Link to='/'><button>1</button></Link>
            <Link to='/page2'><button>2</button></Link>
            <Link to='/page3'><button>3</button></Link>
        </div>
    );
}
