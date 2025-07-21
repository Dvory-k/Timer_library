import React, { useState, useCallback } from 'react';

export const Greeting = React.memo(() => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  

  const handleSubmit = useCallback(() => {
    if (!name.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      alert(`שלום, ${name}!`);
      setIsLoading(false);
    }, 1000);
  }, [name]);

  const handleClear = useCallback(() => {
    setName('');
  }, []);

  return (
    <div>
      <label htmlFor="nameInput">
       
        <input
          id="nameInput"
          type="text"
          placeholder="הכנס את שמך..."
          value={name}
          onChange={handleChange}
         
          disabled={isLoading}
        />
      </label>

      <div>
        <button
          onClick={handleSubmit}
          disabled={isLoading || !name.trim()}
        >
        </button>

        <button
          onClick={handleClear}
          disabled={isLoading || !name}
        >
          נקה
        </button>
      </div>
    </div>
  );
});

export default Greeting;