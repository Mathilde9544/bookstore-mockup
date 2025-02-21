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
  endAt: string;
}

const Book:React.FC<BookProps> = ({ title, author, description, image, avatar, target, sales, endAt }) => {
  const percentage = (sales / target) * 100;
  const targetWidth = percentage >= 100 ? 100 : percentage;

  const today = new Date();
  const endDate = endAt ? new Date(endAt) : new Date();
  const difference = endDate.getTime() - today.getTime();
  const daysLeft = Math.floor(difference / (1000 * 3600 * 24))

  const message = sales >= target ? "Objectif Atteint" : `${daysLeft} days left`;
  const messageClass = sales >= target ? 'objectif-atteint' : '';

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
        <div className="target-percentage">
          <div className="target">
            <div className="target-line" style={{ width: `${targetWidth}%`}}></div>
          </div>
          <p>{percentage.toFixed(0)} %</p>
        </div>
      </div>
      <div className="book-card-footer">
        <h5 className={messageClass}>{message}</h5>
        <button className="preorder-btn">PREORDER</button>
      </div>
    </div>
  );
}

export default Book;
