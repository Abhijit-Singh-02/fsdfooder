import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <section className="page-header">
                <h1>Our Blog &amp; Articles</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </section>
            
            <section className="blog-content">
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/c57f62c9c2a8b89a7cbb3dee33e0d3fe8117b14d.avif" style={{ objectPosition: "50% 82%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>How to prepare a delicious gluten-free sushi</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/420255a39422fb3e768e8405fe617c5d1029aaf0.avif" style={{ objectPosition: "50% 82%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>Exclusive baking lessons from the pastry king</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/11e20661916d0dbd21a5d340edbcfa2c6a94e42d.avif" style={{ objectPosition: "50% 82%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>How to prepare the perfect fries in an air fryer</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/100d5801c991324b3d782647183c9fdb652d8eb4.avif" style={{ objectPosition: "50% 28%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>How to prepare delicious chicken tenders</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/40c980ee0c199025a72a8a7c861e9a8380e5bc41.avif" alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>5 great cooking gadgets you can buy to save time</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/7be5eedfbf36a2b8e604a73d1f7e6d89a9758f43.avif" alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>The secret tips & tricks to prepare a perfect burger</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/4ea57d967195cfc23a179b1728c613c1821d2b48.avif" style={{ objectPosition: "50% 82%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>7 delicious cheesecake recipes you can prepare</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/306f8737b3105b68a5e63b91ed1f7fc9f16a83ec.avif" style={{ objectPosition: "50% 65%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>5 great pizza restaurants you should visit this city</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/fdd06af95b0a8225ed5d67eb3346cd9319fbd2f8.avif" alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>5 great cooking gadgets you can buy to save time</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/ce28b2742a4280f81eab426aa49d21ebf65ab1f0.avif" style={{ objectPosition: "50% 32%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>How to prepare a delicious gluten free sushi</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/0384bb001683a1e0ee3f57fde3ea633f0a8db4ff.avif" style={{ objectPosition: "50% 82%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>Top 20 simple and quick desserts for kids</h2>
                    </div>
                </Link>
                
                <Link to="/blog-post" className="blog-item">
                    <figure>
                        <img src="/src/assets/blog/2adac6ffb4b1eb4e605c59e62e68834ec7c1d135.avif" style={{ objectPosition: "50% 82%" }} alt="Sushi" />
                    </figure>
                    <div className="blog-item-meta">
                        <time dateTime="2023-01-03">January 3, 2023</time>
                        <h2>Top 20 simple and quick desserts for kids</h2>
                    </div>
                </Link>
            </section>
        </>
    );
}