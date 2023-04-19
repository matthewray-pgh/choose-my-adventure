import React, { useState, useEffect } from "react";
import '../styles/LostKey.scss';

import story from "../assets/LostKey.json";

export const LostKey = () => {
  const [chapter, setChapter] = useState(story[0]);
  const [chapterContent, setChapterContent] = useState(story[0].content.split(''));
  const [loading, setLoading] = useState(false);
  const [textRevealed, setTextRevealed] = useState(0);
  const [displayOptions, setDisplayOptions] = useState(false);

  useEffect(() => {
    const revealedDuration = 50;
    const interval = setInterval(() => {
      setTextRevealed((textRevealed) => textRevealed + 1);
    }, revealedDuration);
    return () => clearInterval(interval);
  }, [chapter]);

  useEffect(() => {
    console.log('comparison', textRevealed, chapterContent.length - 1);
    if (textRevealed >= chapterContent.length - 1) {
      setDisplayOptions(true);
    }
  }, [chapterContent, textRevealed]);

  const handleClickOption = (idx) => {
    setLoading(true);
    setChapter(story[idx]);
    setChapterContent(story[idx].content.split(''));
    setLoading(false);

    //reset text reveal and options
    setDisplayOptions(false);
    setTextRevealed(0);
  };

  return (
    <div className="story__page">
      <div className="story__title">The Lost Key</div>
      <section className="story__container">
        {loading ? <p>Loading...</p> : 
        <>
          <div className="story__chapter">
            {chapterContent.map((t, i) => {
            return (
              <span key={i} className={`story__char${i < textRevealed ? "--revealed" : "--hidden"}`}>
                {t}
              </span>
            );
          })}
          </div>
          <div className={`story__options${displayOptions ? "--revealed" : "--hidden"}`}>
            {chapter.options.map((option) => {
              return (
                <div key={option.index}>
                  <button 
                    className="story__button" 
                    onClick={() => handleClickOption(option.index)}
                    disabled={!displayOptions}>
                    {option.content}
                  </button>
                </div>
              );
            })}
          </div>
        </>}
      </section>
    </div>
  );
}