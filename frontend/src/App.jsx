import {Routes, Route} from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}