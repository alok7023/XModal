import React, { useState } from "react";
import "./App.css";

const ModalForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const isFutureDate = (dateString) => {
    const today = new Date();
    const selectedDate = new Date(dateString);
    return selectedDate > today;
  };

  const isEmailValid = (email) => {
    // A simple regex for email validation (you may use a more comprehensive one)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    if(isEmailValid(formData.email)) {
        alert("Invalid email. Please check your email address.")
        return;
    }
    if (isFutureDate(formData.dateOfBirth)) {
      alert("Invalid date of birth. Date of Birth cannot be in the future.");
      return;
    }
    if (formData.phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    e.preventDefault();
    closeModal();
  };
  return (
    <div className="container">
      <h1>Fill Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          name="username"
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          name="dateOfBirth"
          id="dob"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
