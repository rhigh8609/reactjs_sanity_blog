import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Homepage from './pages/homepage'
import Blog from './pages/blog'
import SinglePost from './pages/singlepost'
import Error from './pages/error'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/> 
        <Route path='/blog' element={<Blog/>}/> 
        <Route path='/blog/:slug' element={<SinglePost/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
