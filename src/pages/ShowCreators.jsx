import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    const { data, error } = await supabase
      .from('creators')
      .select('*');
    
    if (error) console.log('Error fetching creators:', error);
    else setCreators(data);
  }

  return (
    <div>
      <h1>Creatorverse</h1>
      <Link to="/add">Add New Creator</Link>
      {creators.length === 0 ? (
        <p>No creators found. Add some!</p>
      ) : (
        creators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))
      )}
    </div>
  );
};

export default ShowCreators;