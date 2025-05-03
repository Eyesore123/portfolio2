import React, { useState } from 'react';
import '../styles/styles.css';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader
    setStatusMessage(''); // Reset previous status message before sending a new one

    try {
      const response = await fetch('https://portfolio-backend-k9okia.fly.dev/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setStatusMessage(data.message);

      if (data.success) {
        // Clear form if successful
        setFormData({ name: '', email: '', message: '' });
      }

    } catch (error) {
      setStatusMessage('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Hide the loader

      // Hide the status message after 5 seconds
      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div>
      <h2 className="gradienttext flex flex-row justify-center items-center text-center font-bold !mt-20">
        {t('contact.header2')}
      </h2>

      <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-20 !mt-20">
        <input
          type="text"
          name="name"
          placeholder={t('contact.name')}
          className="input-field"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.email')}
          className="input-field"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder={t('contact.message')}
          className="input-field"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {loading ? (
          <div style={{ width: '30px', height: '30px', border: '4px solid transparent', marginTop: '20px', borderTop: '4px solid', borderRadius: '50%', animation: 'spin 1s linear infinite', borderImage: 'linear-gradient(45deg, #5800ff, #e900ff) 1' }} />
        ) : (
          <button type="submit" className="submitbutton btn btn-primary !mt-6">
            {t('contact.button')}
          </button>
        )}
      </form>

      {statusMessage && (
        <p id="status-message" className="text-center !mt-6">
          {statusMessage}
        </p>
      )}
    </div>
  );
}
