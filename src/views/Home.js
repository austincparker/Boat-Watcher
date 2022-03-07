import React from 'react';
import { signOutUser } from '../api/auth';

export default function Home() {
  return (
    <div>
      <h1>Boat Watcher!</h1>
      <button type="button" onClick={signOutUser} color="danger">
        Log Out
      </button>
    </div>
  );
}
