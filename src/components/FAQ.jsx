import { useState } from 'react';

function FAQCard({ title, children }) {
    const [flippedCards, setFlippedCards] = useState({});

    const toggleCard = (index) => {
        setFlippedCards(prev => ({
        ...prev,
        [index]: !prev[index]
        }))
    }

    return (
        <div
            className={`faq-item ${flippedCards[0] ? ' expanded' : ''}`}
            onClick={() => toggleCard(0)}
        >
        <div className="faq-question">
            <h3>{title}</h3>
            <div className="expand-arrow">{flippedCards[0] ? '−' : '+'}</div>
        </div>
                  
        <div className="faq-answer">
            {children}
        </div>
        </div>
    );
}

export default FAQCard;