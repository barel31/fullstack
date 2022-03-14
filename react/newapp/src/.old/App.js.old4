import './App.css';
import Post from './Components/Post.jsx';

function App() {
    const posts = [
        { src: 'http://www.clker.com/cliparts/h/z/Z/5/f/x/100px-coffee-cup-hi.png', title: 'Cup', price: '10$', description: 'Cup!', numbers: [1, 2, 3] },
        { src: 'https://miro.medium.com/max/1200/1*nysYMPsFex84IMZ5H7U12A.png', title: 'Flag', price: '5$', description: 'Flag!', numbers: [100, 200, 300] },
    ];
    return (
        <div className="App">
            {posts.map((post, i) => {
                return <Post key={i} src={post.src} title={post.title} price={post.price} description={post.description} numbers={post.numbers} />;
            })}
        </div>
    );
}

export default App;
