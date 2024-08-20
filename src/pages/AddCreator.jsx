import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import CreatorForm from '../components/CreatorForm';

const AddCreator = () => {
  const navigate = useNavigate();

  async function addCreator(newCreator) {
    const { data, error } = await supabase
      .from('creators')
      .insert([newCreator])
      .select();
    
    if (error) console.log('Error adding creator:', error);
    else navigate(`/view/${data[0].id}`);
  }

  return (
    <div>
      <h1>Add New Creator</h1>
      <CreatorForm onSubmit={addCreator} />
    </div>
  );
};

export default AddCreator;