import FAQCard from "./FAQCard.jsx";
import faq from "../data/faq.js";

function FAQ() {
    return (
        <section id="faq" className="faq-section">
            <div><h2 className="faq-title">Frequently Asked Questions</h2></div>

            <div className="faq-list">
                {faq.map(({ question, answer }) => (
                    <FAQCard key={question} title={question}>
                        <p>
                            {[].concat(answer).map((part, i) => typeof part === "string" ? part : (
                                <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a>
                            ))}
                        </p>
                    </FAQCard>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
