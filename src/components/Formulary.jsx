import React, { useEffect, useState } from 'react';


export default function Formulary() {

  const [isSent, setIsSent] = useState(() => {
    const storedValue = sessionStorage.getItem('isSent');
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    sessionStorage.setItem('isSent', isSent);
  }, [isSent]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [formOk, setFormOk] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleFormChange = (isOk) => {
    setFormOk(isOk)
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/, '');
    setPhone(value);
    setPhoneValid(validatePhone(value));
  };

  const handleNameChange = (event) => {
    setFirstName(event.target.value)
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  };

  const send = () => {
    setIsSent(true)
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    // console.log(formData);

    // Submit form data to a specific URL
    const url = 'https://nocodeform.io/f/652f1e5c4081185a963d2639';
    //const url = 'localhost:3006/kostianis-web'
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/javascript',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission response:', data);
        // Handle response as needed
        send()
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        // Handle error as needed
        handleFormChange(false)
      });
  };

  //COMMON STYLES

  const titleStyles = 'mb-3 block text-base font-poppins text-white'
  const boxStyles = 'w-full rounded-sm border-[2px] border-[#e0e0e0] bg-white py-3 px-6 text-base font-poppins text-[#6B7280] outline-none focus:border-purple-900 focus:shadow-md'




  return (
    <>
      {!isSent &&
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-3">
                <div className="w-full sm:w-1/2">
                  <div className="mb-4">
                    <label
                      htmlFor="fName"
                      className={`${titleStyles}`}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleNameChange}
                      required
                      className={`${boxStyles}`}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="mb-4">
                    <label
                      htmlFor="lName"
                      className={`${titleStyles}`}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleLastNameChange}
                      required
                      className={`${boxStyles}`}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`${titleStyles}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`${boxStyles} ${!emailValid && 'border-red-500'
                    }`}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {!emailValid && (
                  <p className="text-red-500 font-poppins text-xs mt-1">Please enter a valid email</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className={`${titleStyles}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder='Phone Number'
                  className={`${boxStyles} ${!emailValid && 'border-red-500'
                    }`}
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
                {!phoneValid && (
                  <p className="text-red-500 font-poppins text-xs mt-1">
                    Please enter a valid 10-digit phone number
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='msg'
                  className={`${titleStyles}`}>
                  What can we help you with?
                </label>
                <textarea
                  type="text"
                  id='msg'
                  placeholder='Brief description (optional)'
                  className={`${boxStyles}`}
                  value={message}
                  onChange={handleMessageChange}
                  rows="5"
                />
              </div>
              {!formOk && <div className='text-red-700 font-poppins text-xl'>
                Something went wrong, please try again later
              </div>
              }
              <div className="mt-4">
                <button
                  className="hover:shadow-form font-poppins rounded-md bg-purple-900 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div> ||
        <div className='text-4xl text-white font-poppins font-extrabold my-32'>Thank you we will contact you soon</div>
      }

    </>

  )
}