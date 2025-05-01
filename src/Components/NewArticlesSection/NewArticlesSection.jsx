import React from "react";
import './NewArticlesSection.css'
import { articles } from "../../articles";
import { FaUserAlt, FaRegCommentDots, FaShareAlt } from "react-icons/fa";

const NewArticlesSection = () => {
    return (
        <div className="article-section">
          {articles.map((item, index) => (
            <div className="article-card" key={index}>
              <div className="article-image">
                <img src={item.image} alt="article" />
                <div className="date-badge">
                  <div>{item.date}</div>
                  <div>{item.month}</div>
                </div>
                <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="tag">{item.category}</div>
              <h4 className="title">{item.title}</h4>
              <div className="icons">
                <span><FaUserAlt /> {item.author}</span>
                <span><FaRegCommentDots /></span>
                <span><FaShareAlt /></span>
              </div>
              <p className="intro">{item.intro}</p>
              <p className="read-more">CONTINUE READING</p>
            </div>
          ))}
        </div>
      );
};
export default NewArticlesSection;
