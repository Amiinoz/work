import React, { useState } from 'react';
import { db } from '../Contact/firebase';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import SectionHeader from '../sectionHeader/SectionHeader';

import './contact.scss';

const Contact = () => {
  const { register, errors, handleSubmit } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);

  const submit = e => {
    setLoader(true);

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        Swal.fire({
          position: 'middle',
          icon: 'success',
          title: 'Your message has been sent!',
          showConfirmButton: false,
          timer: 1500,
        });
        setLoader(false);
      });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <SectionHeader
        title="Contact"
        subtitle="Say hello"
        heading="I am currently open to new opportunities and freelance work"
      />
      <section className="contact-container" data-scroll-section>
        <div className="contact-container_intro">
          <p>
            Thank you so much for visiting.
            <br />
          </p>
        </div>
        <div className="contact-container_form">
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              ref={register({
                validate: value => value !== '',
              })}
              onChange={e => setName(e.target.value)}
            />
            {errors.name && <p> Name is required </p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && <p>Please enter valid email</p>}

            <textarea
              type="text"
              name="message"
              placeholder="Message"
              value={message}
              ref={register({
                validate: value => value !== '',
              })}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p>....Oh snap, ....the message?</p>}
            <button
              type="submit"
              style={{ background: loader ? '#000000' : '#ffc600' }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
