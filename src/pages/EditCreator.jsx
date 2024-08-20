import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CreatorForm from '../components/CreatorForm';

const EditCreator = () => {
  const [creator, setCreator] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  async function updateCreator(updatedCreator) {
    const { error } = await supabase
      .from('creators')
      .update(updatedCreator)
      .eq('id', id);
    
    if (error) console.log('Error updating creator:', error);
    else navigate(`/view/${id}`);
  }

  async function deleteCreator() {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
    
    if (error) console.log('Error deleting creator:', error);
    else navigate('/');
  }

  if (!creator) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Creator</h1>
      <CreatorForm creator={creator} onSubmit={updateCreator} />
      <button onClick={deleteCreator}>Delete Creator</button>
    </div>
  );
};

export default EditCreator;