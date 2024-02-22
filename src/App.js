import React, { useState } from 'react';
import './App.css';
import { registerUser } from './api/Api'; // Assuming your api file is in the same directory as App.js

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  async function signUpAction() {
    console.log("Sign Up action");
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);

    try {

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // Handle the response (you can log it or show a success message)
      console.log('Registration response:', response.data);
      alert('User registered successfully!');
    } catch (error) {
      // Handle errors (you can log them or show an error message)
      console.error('Registration error:', error);
      alert('Failed to register user. Please try again.');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2>Welcome to Spacer</h2>
          <form >
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} /><br /><br />

            <label htmlFor="email">Email address:</label><br />
            <input type="text" id="email" name="email" onChange={handleChange} value={formData.email} /><br /><br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} /><br /><br />

            <button type="button" onClick={signUpAction}>Sign Up</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
