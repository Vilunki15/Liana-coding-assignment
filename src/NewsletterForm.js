import React from "react";
import { useState } from "react";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [ subscribed, setSubscribed ] = useState(false);
    const handleSubscribe = () => {
        if (email.includes('@')) {
            setSubscribed(true);
        } else {
            alert("Please enter a valid email address!");
        }
    };
    return (
        <div className="newsletter">
            {subscribed ? (
                <div className="thank-you-message">
                    Thank you for subscribing to our email newsletter!
                </div>
            ) : (
            <>
                <h2>Subscribe to our newsletter</h2>
                <p>Follow our story and get the latest promotional news about our products and events.</p>
                <div className="newsletter-form">
                    <form>
                        <input
                            type="text"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </form>
                    <button onClick={handleSubscribe}>Subscribe</button>
                </div>
            </>
            )}
        </div>
    );
};

export default NewsletterForm;