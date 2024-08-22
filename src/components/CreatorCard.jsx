import React from 'react';
import { Link } from 'react-router-dom';

const CreatorCard = ({ creator }) => {
  return (
    <article className="creator-card">
      <h2>{creator.name}</h2>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <p className = "card-description">{creator.description}</p>
      <div className="button-group">
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="visit-channel-btn">
          Visit Channel
        </a>
        <Link to={`/view/${creator.id}`} role="button" className="outline">View Details</Link>
        <Link to={`/edit/${creator.id}`} role="button" className="outline secondary">Edit</Link>
      </div>
    </article>
  );
};

export default CreatorCard;