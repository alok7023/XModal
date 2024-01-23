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
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <div className="container">
    <h1>Fill Details</h1>
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input
          type="text"
          value={formData.username}
          name="username"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email Address:
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          value={formData.dateOfBirth}
          name="dateOfBirth"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ModalForm;
