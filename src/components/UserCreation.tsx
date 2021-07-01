/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
// import React from 'react';

export const userContext = React.createContext<string>('');

function UserCreation() {
  const [name, setName] = useState('ipson');
  const handleSubmit = (evt:any) => {
    useEffect(() => {
      setName(evt.target.value);
    });
    alert(`Submitting Name ${name}`);
  };
  return (
        <form onSubmit={handleSubmit}>
        <input type="text"/>
        <button type="submit">submit</button>
    </form>);
}
export default UserCreation;
