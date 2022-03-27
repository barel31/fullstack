import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './Components/Title';
import Menu from './Components/Menu';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import SignIn from './Components/SignIn';

export default function App() {
    return (
        <div className='App'>
            <Title />
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Page1 />} />
                    <Route path='/page2' element={<Page2 />} />
                    <Route path='/page3' element={<Page3 />} />
                </Routes>
                <SignIn />
            </BrowserRouter>
        </div>
    );
}
