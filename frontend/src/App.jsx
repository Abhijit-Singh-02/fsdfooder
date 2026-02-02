import {Routes, Route} from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import BlogPost from './pages/BlogPost/BlogPost.jsx';
import Contact from './pages/Contact/Contact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-post" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}