import React, { useState } from 'react';

const CreatorForm = ({ creator = {}, onSubmit }) => {
  const [name, setName] = useState(creator.name || '');
  const [url, setUrl] = useState(creator.url || '');
  const [description, setDescription] = useState(creator.description || '');
  const [imageURL, setImageURL] = useState(creator.imageURL || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, url, description, imageURL });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Creator Name"
        required
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Creator URL"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="url"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        placeholder="Image URL (optional)"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatorForm;