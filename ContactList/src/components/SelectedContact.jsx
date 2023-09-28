import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>; // Display a loading message while fetching data.
  }

  // Render contact details once data is available.
  return (
    <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      {}
    </div>
  );
}


