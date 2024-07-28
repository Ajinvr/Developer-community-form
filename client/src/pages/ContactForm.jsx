import React, { useState } from 'react';
import FormHeadingText from './FormHeadingText';

const inputstyle = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition-colors duration-300';
const labelstyle = 'block text-white font-bold mb-2';
const btnstyle = 'px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring focus:border-yellow-600 transition-colors duration-300';
const errorStyle = 'text-red-500 mt-1';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    source: false
  });

  const redirectLink = 'https://chat.whatsapp.com/DNZMRvg38ay8nNwG3VAegu';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: !value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      redirectToLink();
    }
  };

  const validateForm = () => {
    const { name, email, phone, source } = formData;
    const newErrors = {
      name: !name,
      email: !email || !validateEmail(email),
      phone: !phone,
      source: !source
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const redirectToLink = () => {
    window.location.href = redirectLink;
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900'>
      <div className='w-full max-w-md'>
        <FormHeadingText />
        <div className="mx-auto my-5 p-6 sm:border sm:rounded-lg sm:shadow-lg sm:bg-opacity-20 sm:backdrop-filter sm:backdrop-blur-lg">
          <form onSubmit={handleSubmit}>
            <div className={` ${errors.name ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="name" className={labelstyle}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`${inputstyle} ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className={errorStyle}>Name is required</p>}
            </div>

            <div className={` ${errors.name ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="email" className={labelstyle}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`${inputstyle} ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={errorStyle}>Valid email is required</p>}
            </div>

            <div className={` ${errors.name ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="phone" className={labelstyle}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`${inputstyle} ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className={errorStyle}>Phone number is required</p>}
            </div>

            <div className={` ${errors.name ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="source" className={labelstyle}>Where did you get this link?</label>
              <textarea
                id="source"
                name="source"
                className={`${inputstyle} ${errors.source ? 'border-red-500' : ''}`}
                placeholder="Tell us where you got this link"
                rows="1"
                value={formData.source}
                onChange={handleChange}
              />
              {errors.source && <p className={errorStyle}>This field is required</p>}
            </div>

            <div className="flex justify-center">
              <button type="submit" className={btnstyle}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
