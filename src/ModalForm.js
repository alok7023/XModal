import React, { useState } from "react";
import "./App.css";

const ModalForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
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

  const handleSubmit = (e) => {
    if (isFutureDate(formData.dateOfBirth)) {
      alert("Invalid date of birth. Date of Birth cannot be in the future.");
      return;
    }
    if (formData.phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a 10 digit phone number.");
      return;
    }
    e.preventDefault();
    closeModal();
  };
  return (
    <div className="container">
      <h1>Fill Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          Email Address:
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="phone">
          Phone Number:
          <input
            type="tel"
            value={formData.phoneNumber}
            name="phoneNumber"
            id="phone"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="dob">
          Date of Birth:
          <input
            type="date"
            value={formData.dateOfBirth}
            name="dateOfBirth"
            id="dob"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ModalForm;
