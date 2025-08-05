import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactLinks = [
    {
      name: t('contact.links.github'),
      url: 'https://github.com/emanuele-toma',
      icon: 'simple-icons:github',
      color: 'hover:text-gray-300',
    },
    {
      name: t('contact.links.linkedin'),
      url: 'https://linkedin.com/in/emanuele-toma',
      icon: 'simple-icons:linkedin',
      color: 'hover:text-blue-400',
    },
    {
      name: t('contact.links.email'),
      url: 'mailto:emanuele@toma.gg',
      icon: 'lucide:mail',
      color: 'hover:text-red-400',
    },
    {
      name: t('contact.links.resume'),
      url: '/files/emanuele-toma-resume.pdf',
      icon: 'lucide:file-text',
      color: 'hover:text-green-400',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.validation.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.validation.messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append('access_key', 'c50835e6-904d-4728-8430-1ef85ac12eb3');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">{t('contact.getInTouch')}</h3>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg mr-4">
                    <Icon icon="lucide:mail" className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t('contact.emailLabel')}</h4>
                    <a href="mailto:emanuele@toma.gg" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      emanuele@toma.gg
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">{t('contact.findMeOn')}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {contactLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-200 ${link.color}`}
                    >
                      <Icon icon={link.icon} className="w-5 h-5 mr-3" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <h4 className="text-white font-semibold mb-3">{t('contact.lookingForCollaboration')}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{t('contact.collaborationText')}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">{t('contact.sendMessage')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                    }`}
                    placeholder={t('contact.form.name')}
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                    }`}
                    placeholder={t('contact.form.email')}
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                    }`}
                    placeholder={t('contact.form.message')}
                  />
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="lucide:loader-2" className="w-5 h-5 mr-2 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Icon icon="lucide:send" className="w-5 h-5 mr-2" />
                      {t('contact.form.send')}
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                    <div className="flex items-center">
                      <Icon icon="lucide:check-circle" className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-300">{t('contact.form.success')}</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
                    <div className="flex items-center">
                      <Icon icon="lucide:x-circle" className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-red-300">{t('contact.form.error')}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
