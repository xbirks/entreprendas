"use client";

import React, { useState } from 'react';
import './faq.scss';

function FaqItem({ titulo, explicacion }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <button className="faq__item-btn" onClick={toggleExpand} aria-expanded={isExpanded}>
            <div className="faq__item">
                <span className="faq__item-btn-icon">
                    <p className={isExpanded ? 'expanded' : ''}>{isExpanded ? '-' : '+'}</p>
                </span>
                <h3 className="faq__item-title">{titulo}</h3>
                <div className={`faq__item-content ${isExpanded ? 'expanded' : ''}`}>
                    <p>{explicacion}</p>
                </div>
            </div>
        </button>
    );
}

export default FaqItem;

