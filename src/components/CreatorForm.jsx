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
      <div className="form-group">
        <label htmlFor="name">Creator Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">Creator URL</label>
        <input
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageURL">Image URL (optional)</label>
        <input
          id="imageURL"
          type="url"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatorForm;