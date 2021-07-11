import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import TransactionsByUser from './TransactionsByUser';

interface RouteParams {
  publickey: string
}
export default function UserCreated() : ReactElement {
  const { publickey } = useParams<RouteParams>();
  return (
      <div>
        <h3><TransactionsByUser publicKey={publickey}/></h3>
      </div>
  );
}
