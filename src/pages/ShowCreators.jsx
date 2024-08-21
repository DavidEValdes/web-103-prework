import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('creators')
        .select('*');
      if (error) throw error;
      setCreators(data);
    } catch (error) {
      setError('Failed to fetch creators');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div aria-busy="true">Loading creators...</div>;
  if (error) return <div role="alert">Error: {error}</div>;

  return (
    <div className="show-creators-container">
      <h1> Browse All Creators</h1>
      <Link to="/add" role="button" className="add-creator-btn">Add New Creator</Link>
      {creators.length === 0 ? (
        <p>No creators found. Add some!</p>
      ) : (
        <div className="creator-grid">
          {creators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCreators;