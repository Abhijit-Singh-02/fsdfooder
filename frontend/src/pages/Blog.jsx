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
                
            </section>
        </>
    );
}