import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
      }, 500);
    } else {
      setDots('');
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('https://portfolio-backend-k9okia.fly.dev/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setStatusMessage(data.message);

      if (data.success) {
        setFormData({ name: '', email: '', message: '' });
      }

    } catch (error) {
      setStatusMessage('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    }
  };

  const spinnerStyles = {
    width: '30px',
    height: '30px',
    border: '4px solid transparent',
    borderTop: '4px solid',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    borderImage: 'linear-gradient(45deg, #5800ff, #e900ff) 1',
  };

  return (
    <div className="md:!pt-12 !pb-22 !pl-6 !pr-6 gap-10 justify-center items-center">
      <h2 className="gradienttext flex flex-row justify-center items-center text-center font-bold !mt-20">
        {t('contact.header2')}
      </h2>

      <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-20 !mt-20">
        <input
          type="text"
          name="name"
          placeholder={t('contact.name')}
          className="input-field contact-input"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.email')}
          className="input-field contact-input"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder={t('contact.message')}
          className="input-field contact-input"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {/* Button always in DOM to preserve styles */}
        <div className="relative flex justify-center !mt-6">
          <button
            type="submit"
            className="submitbutton btn btn-primary"
            disabled={loading} // prevent clicks while loading
          >
            {t('contact.button')}
          </button>

          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
              <div style={spinnerStyles} />
              <p className="text-center mt-4">
                {t('contact.loadingmessage')}
                <span style={{ display: 'inline-block', width: '1.5em', textAlign: 'left' }}>
                  {dots}
                </span>
              </p>
            </div>
          )}
        </div>
      </form>

      {statusMessage && (
        <p id="status-message" className="text-center !mt-6">
          {statusMessage}
        </p>
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
