import React, { useRef, useState } from 'react';

const Contact = () => {
  const nameRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    nameRef.current.focus(); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          ref={nameRef}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
