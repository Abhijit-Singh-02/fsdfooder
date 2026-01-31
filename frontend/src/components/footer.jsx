import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer pb-10 bg-footer-bg">
            <div className="flex p-5vw gap-5vw justify-between flex-wrap">
                <div className="basis-1/4 grow min-w-64">
                    <figure class="flex items-center gap-4 mb-8">
                        <img src="/src/assets/footerLogo.png" alt="Logo" />
                        <figcaption className="mt-2vw font-serif font-semibold italic text-3xl text-white">Bistro Bliss</figcaption>
                    </figure>
                    <p className="footer-details">In the new era of technology, we proudly serve great food with modern convenience — in our restaurant or delivered to your door.</p>
                    <ul className="footer-social flex gap-4 mt-8">
                        <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>
                
                <div className="basis-1/8 grow min-w-32">
                    <h3>Pages</h3>
                    <ul className="footer-link-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/delivery">Delivery</Link>
                        </li>
                    </ul>
                </div>

                <div className="basis-1/8 grow min-w-32">
                    <h3>Utility Pages</h3>
                    <ul className="footer-link-list">
                        <li>
                            <Link to="/">Start Here</Link>
                        </li>
                        <li>
                            <Link to="/about">Styleguide</Link>
                        </li>
                        <li>
                            <Link to="/menu">Password Protected</Link>
                        </li>
                        <li>
                            <Link to="/pricing">404 Not Found</Link>
                        </li>
                        <li>
                            <Link to="/blog">Licenses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Changelog</Link>
                        </li>
                        <li>
                            <Link to="/delivery">View More</Link>
                        </li>
                    </ul>
                </div>

                <div className="basis-1/4 grow min-w-64">
                    <h3>Follow us on Instagram</h3>
                    <div className="grid footer-insta-grid">
                        <div>
                            <img src="/src/assets/footer/2afc8d85df65694e80da72b0cf7de51a40b50eda.avif" alt="Instagram 1" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <img src="/src/assets/footer/474b1a28c06d46003df0b80dda4474c726928827.avif" alt="Instagram 2" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <img src="/src/assets/footer/2f8aae03a37ce4d049abe6d7f425f16004de4208.avif" alt="Instagram 3" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <img src="/src/assets/footer/c957e3732cc67a477e4e2d06b4adddd11c436044.avif" alt="Instagram 3" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-container text-center pt-8">
                <p>Copyright &copy; 2023 Hashtag Developer. All rights reserved.</p>
            </div>
        </footer>
    );
}