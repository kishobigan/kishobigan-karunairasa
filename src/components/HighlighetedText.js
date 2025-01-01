import React from "react";

function highlightText(text, highlights) {
    if (!text || !Array.isArray(highlights)) return text;
    const words = text.split(" ");
    return words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, ""); // Remove punctuation
        if (highlights.includes(cleanWord)) {
            return (
                <span key={index} className="purple">
          {word}{" "}
        </span>
            );
        }
        return <span key={index}>{word} </span>;
    });
}

export default highlightText;
