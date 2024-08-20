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

  if (!creator) return <div>Loading...</div>;

  return (
    <div>
      <h1>{creator.name}</h1>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
      <Link to="/">Back to All Creators</Link>
    </div>
  );
};

export default ViewCreator;