import { useState } from 'react' // We're importing a function called useState from a library called React
import reactLogo from './assets/react.svg' // We're importing an image file called react.svg
import viteLogo from '/vite.svg' // We're importing an image file called vite.svg
import './App.css' // We're importing a CSS file to style our app

function App() { // This is our main function called App
  // We're creating a piece of memory to store information (like a box) for a person with their name and last name
  const [person, setPerson] = useState({ name: "", lastName: "" });

  // This function will run when we type something in the name input box
  const handleNameChange = (e) => {
    // It's like changing what's inside the name box whenever we type something new
    // We're updating the name in our memory box for the person
    setPerson({ ...person, name: e.target.value });
  };

  // This function will run when we type something in the last name input box
  const handleLastNameChange = (e) => {
    // It's like changing what's inside the last name box whenever we type something new
    // We're updating the last name in our memory box for the person
    setPerson({ ...person, lastName: e.target.value });
  };

  // We're combining the name and last name from our memory box to create a full name
  let fullname = person.name + " " + person.lastName;

  return (
    <> {/* This is like our main container where everything will go */}
      <form className="formi"> {/* This is a form where we can type information */}
        {/* Input field for name */}
        <input type="text" value={person.name} onChange={handleNameChange} /> {/* This is where we type our name */}
        
        {/* Input field for last name */}
        <input type="text" value={person.lastName} onChange={handleLastNameChange} /> {/* This is where we type our last name */}
      </form>

      {/* We're showing the full name we created */}
      <p>{fullname}</p>
    </>
  );
}

export default App; // We're exporting our main function so others can use it
