import React from 'react';
import './book.css';

interface BookProps {
  title: string;
  author: string;
  description: string;
  image: string;
  avatar: string;
  target: number;
  sales: number;
}

const Book:React.FC<BookProps> = ({ title, author, description, image, avatar, target, sales }) => {
  const percentage = (sales / target) * 100;
  const targetWidth = percentage >= 100 ? 100 : percentage;

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <hr></hr>
      <div className="author">
        <img src={avatar} alt={author} className="avatar"/>
        <div className="title-author">
          <h5 className="book-title">{title}</h5>
          <h6 className="book-author">{author}</h6>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="publication-target">
        <p>Publication target</p>
        <div className="target">
          <div className="target-line" style={{ width: `${targetWidth}%`}}></div>
          {targetWidth.toFixed(0)} %
        </div>
      </div>
      <div>Objectif Atteint</div>
      <button>Preorder</button>
    </div>
  );
}

export default Book;
