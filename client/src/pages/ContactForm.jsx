import React, { useState } from 'react';
import FormHeadingText from './FormHeadingText';

const inputstyle = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition-colors duration-300';
const labelstyle = 'block text-white font-bold mb-2';
const btnstyle = 'px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring focus:border-yellow-600 transition-colors duration-300';
const errorStyle = 'text-red-500 mt-1';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "entry.1517675444": '',
    "entry.1277496823": '',
    "entry.408859639": '',
    "entry.733189515": ''
  });

  const [errors, setErrors] = useState({
    "entry.1517675444": false,
    "entry.1277496823": false,
    "entry.408859639": false,
    "entry.733189515": false
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
      document.getElementById('contactForm').submit();
      setTimeout(() => {
        window.location.href = redirectLink;
      }, 200);
    }
  };

  const validateForm = () => {
    const newErrors = {
      "entry.1517675444": !formData["entry.1517675444"],
      "entry.1277496823": !formData["entry.1277496823"] || !validateEmail(formData["entry.1277496823"]),
      "entry.408859639": !formData["entry.408859639"],
      "entry.733189515": !formData["entry.733189515"]
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900'>
      <div className='w-full max-w-md'>
        <FormHeadingText />
        <div className="mx-auto my-5 p-6 sm:border sm:rounded-lg sm:shadow-lg sm:bg-opacity-20 sm:backdrop-filter sm:backdrop-blur-lg">
          <form id="contactForm" action='https://docs.google.com/forms/d/e/1FAIpQLSeba0_vKRBo2ORM6hpld-IX5iVEsOrNf-PYkxwdS076fmT3zg/formResponse' method="POST" onSubmit={handleSubmit}>
            <div className={` ${errors["entry.1517675444"] ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="entry.1517675444" className={labelstyle}>Name</label>
              <input
                type="text"
                id="entry.1517675444"
                name="entry.1517675444"
                className={`${inputstyle} ${errors["entry.1517675444"] ? 'border-red-500' : ''}`}
                placeholder="Your name"
                value={formData["entry.1517675444"]}
                onChange={handleChange}
              />
              {errors["entry.1517675444"] && <p className={errorStyle}>Name is required</p>}
            </div>

            <div className={` ${errors["entry.1277496823"] ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="entry.1277496823" className={labelstyle}>Email</label>
              <input
                type="email"
                id="entry.1277496823"
                name="entry.1277496823"
                className={`${inputstyle} ${errors["entry.1277496823"] ? 'border-red-500' : ''}`}
                placeholder="Your email"
                value={formData["entry.1277496823"]}
                onChange={handleChange}
              />
              {errors["entry.1277496823"] && <p className={errorStyle}>Valid email is required</p>}
            </div>

            <div className={` ${errors["entry.408859639"] ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="entry.408859639" className={labelstyle}>Phone Number</label>
              <input
                type="tel"
                id="entry.408859639"
                name="entry.408859639"
                className={`${inputstyle} ${errors["entry.408859639"] ? 'border-red-500' : ''}`}
                placeholder="Your phone number"
                value={formData["entry.408859639"]}
                onChange={handleChange}
              />
              {errors["entry.408859639"] && <p className={errorStyle}>Phone number is required</p>}
            </div>

            <div className={` ${errors["entry.733189515"] ? 'mb-1' : 'mb-4'}`}>
              <label htmlFor="entry.733189515" className={labelstyle}>Where did you get this link?</label>
              <textarea
                id="entry.733189515"
                name="entry.733189515"
                className={`${inputstyle} ${errors["entry.733189515"] ? 'border-red-500' : ''}`}
                placeholder="Tell us where you got this link"
                rows="1"
                value={formData["entry.733189515"]}
                onChange={handleChange}
              />
              {errors["entry.733189515"] && <p className={errorStyle}>This field is required</p>}
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
