export default function Contact() {
    const noSubmit = (e) => {
        e.preventDefault();
        alert("Form submission is currently disabled.");
    }

    return (
        <>
            <section className="page-header">
                <h1>Contact Us</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </section>
            
            <section className="contact-form">
                <form action="#" method="POST" onSubmit={noSubmit} >
                    <fieldset>
                        <div className="contact-form-half-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter Your Name" minLength={4} required />
                        </div>
                        <div className="contact-form-half-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div className="contact-form-full-field">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Write a Subject" minLength={8} required />
                        </div>
                        <div className="contact-form-full-field">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Write Your Message" minLength={20} required></textarea>
                        </div>
                    </fieldset>
                    <div className="contact-form-submit">
                        <button type="submit" className="btn-submit">Send</button>
                    </div>
                </form>
            </section>

            <section className="contact-more">
                <div className="contact-more_flex">
                    <div>
                        <h3>Call us:</h3>
                        <div class="contact-tel">
                            <a href="tel:+12345678900">+1-234-567-8900</a>
                        </div>
                    </div>
                    <div>
                        <h3>Hours:</h3>
                        <div>
                            <p>Mon-Fri: 11am - 8pm Sat,</p>
                            <p>Sun: 9am - 10pm</p>
                        </div>
                    </div>
                    <div>
                        <h3>Our Location:</h3>
                        <div>
                            <p>123 Bridge Street</p>
                            <p>Nowhere Land, LA 12345</p>
                            <p>United States</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}