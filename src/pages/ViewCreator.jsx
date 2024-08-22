import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const [creator, setCreator] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCreator();
  }, [id]);

  async function fetchCreator() {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .eq('id', id)
      .single();
    if (error) console.log('Error fetching creator:', error);
    else setCreator(data);
  }

  if (!creator) return <div className="loading">Loading...</div>;

  return (
    <div className="view-creator-container">
      <h1 className="creator-name">{creator.name}</h1>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="creator-image" />}
      <p className="creator-description">{creator.description}</p>
      <div className="button-group">
        <a href={creator.url} target="_blank" rel="noopener noreferrer" className="visit-channel-btn">Visit Channel</a>
        <Link to={`/edit/${creator.id}`} className="edit-btn">Edit</Link>
        <Link to="/" className="back-btn">Back to All Creators</Link>
      </div>
    </div>
  );
};

export default ViewCreator;