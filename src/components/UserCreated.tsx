import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import DisplayUser from './DisplayUser';

interface RouteParams {
    id: string
}
export default function UserCreated() : ReactElement {
  const { id } = useParams<RouteParams>();
  return (
      <div>
        <h3><DisplayUser userName={id}/></h3>
      </div>
  );
}
