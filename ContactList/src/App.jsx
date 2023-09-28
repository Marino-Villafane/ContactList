import './App.css'
import ContactList from './components/ContactList'
import { useState } from 'react'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}

    </>
  );
}