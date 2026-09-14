import { useState } from 'react';

function FAQCard({ title, children }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`faq-item ${expanded ? ' expanded' : ''}`}
            onClick={() => setExpanded(!expanded)}
        >
            <div className="faq-question">
                <h3>{title}</h3>
                <div className="expand-arrow">{expanded ? '−' : '+'}</div>
            </div>

            <div className="faq-answer">
                {children}
            </div>
        </div>
    );
}

export default FAQCard;