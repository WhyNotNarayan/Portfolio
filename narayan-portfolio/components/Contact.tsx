'use client';
// components/Contact.tsx
import dynamic from 'next/dynamic';
const FloatingCubes = dynamic(() => import('./FloatingCubes'), { ssr: false });
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Smartphone } from 'lucide-react';

// FormSubmit.co — free, no API key needed, just confirm your email once
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/narayangawade684@gmail.com';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isRobot, setIsRobot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const phoneValid = formData.phone.length === 10;

  const allFilled =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    phoneValid &&
    formData.message.trim() !== '';

  const canSubmit = allFilled && isRobot && !loading;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Phone: digits only, max 10
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isRobot) {
      setError('Please confirm you are not a robot.');
      return;
    }
    if (!allFilled) {
      setError('Please fill in all required fields (Name, Email, Phone, Message).');
      return;
    }

    // Exactly 10 digits required
    if (formData.phone.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone,
          subject: formData.subject || '(No subject)',
          message: formData.message,
          // FormSubmit config options
          _subject: `New Portfolio Contact: ${formData.name}`,
          _captcha: 'false',       // we have our own robot check
          _template: 'table',      // nice table format in email
        }),
      });

      const data = await res.json();

      if (res.ok && data.success === 'true') {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsRobot(false);
        setTimeout(() => setSuccess(false), 6000);
      } else {
        throw new Error(data.message || 'Unknown error from FormSubmit');
      }
    } catch (err: any) {
      console.error('FormSubmit error:', err);
      setError(`Failed to send: ${err.message ?? 'Please email narayangawade684@gmail.com directly'}`);
    }

    setLoading(false);
  };

  const inputClass =
    'w-full bg-transparent border-b dark:border-white/20 border-black/20 focus:border-sky-400 outline-none dark:text-white text-slate-900 placeholder-zinc-400 dark:placeholder-zinc-500 pb-2 text-lg transition-colors duration-200';

  return (
    <section id="contact" className="py-24 dark:bg-zinc-900/50 bg-slate-100/50 relative overflow-hidden">
      <FloatingCubes />
      <div className="relative z-10 w-full h-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl dark:text-zinc-400 text-slate-600 max-w-2xl mx-auto">
            Let's build something secure and innovative together. Drop a message—I'm all ears for Web3, Cybersecurity, or IoT collabs!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold">Email Me</h3>
              </div>
              <p className="dark:text-zinc-300 text-slate-700">narayangawade684@gmail.com</p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold">Call / WhatsApp</h3>
              </div>
              <p className="dark:text-zinc-300 text-slate-700">+91 8975347452</p>
            </div>

            {/* Required fields reminder */}
            <div className="glass p-5 rounded-2xl border dark:border-white/5 border-black/5">
              <p className="text-sm dark:text-zinc-400 text-slate-500 leading-relaxed">
                <span className="text-red-400 font-semibold">*</span> All fields marked below are required before you can send a message. The robot check must also be ticked.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Name */}
              <div className="glass p-5 rounded-2xl">
                <label className="text-xs font-semibold dark:text-zinc-400 text-slate-500 uppercase tracking-wider mb-1 block">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Narayan Gawade"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="glass p-5 rounded-2xl">
                <label className="text-xs font-semibold dark:text-zinc-400 text-slate-500 uppercase tracking-wider mb-1 block">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Mobile Number */}
              <div className={`glass p-5 rounded-2xl border transition-colors duration-200 ${
                formData.phone.length === 0 ? 'dark:border-white/5 border-black/5'
                : formData.phone.length === 10 ? 'border-green-500/40'
                : 'border-red-400/40'
              }`}>
                <label className="text-xs font-semibold dark:text-zinc-400 text-slate-500 uppercase tracking-wider mb-1 flex justify-between">
                  <span>Mobile Number <span className="text-red-400">*</span></span>
                  <span className={`font-mono ${
                    formData.phone.length === 10 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {formData.phone.length}/10
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    className={inputClass}
                  />
                </div>
                {formData.phone.length > 0 && formData.phone.length < 10 && (
                  <p className="text-xs text-red-400 mt-1">
                    {10 - formData.phone.length} more digit{10 - formData.phone.length !== 1 ? 's' : ''} needed
                  </p>
                )}
                {formData.phone.length === 10 && (
                  <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Valid mobile number
                  </p>
                )}
              </div>

              {/* Subject — optional */}
              <div className="glass p-5 rounded-2xl">
                <label className="text-xs font-semibold dark:text-zinc-400 text-slate-500 uppercase tracking-wider mb-1 block">
                  Subject <span className="dark:text-zinc-600 text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g., Web3 Project Collab"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="glass p-5 rounded-2xl">
                <label className="text-xs font-semibold dark:text-zinc-400 text-slate-500 uppercase tracking-wider mb-1 block">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Robot check */}
              <div className={`glass p-4 rounded-xl flex items-center gap-3 border transition-colors duration-300 ${isRobot ? 'border-green-500/40 bg-green-500/5' : 'dark:border-white/5 border-black/5'}`}>
                <label className="flex items-center gap-3 cursor-pointer select-none w-full">
                  <input
                    type="checkbox"
                    checked={isRobot}
                    onChange={(e) => setIsRobot(e.target.checked)}
                    className="w-5 h-5 rounded accent-[color:var(--accent)] cursor-pointer"
                  />
                  <span className="text-sm dark:text-zinc-400 text-slate-600">
                    I am not a robot
                  </span>
                  {isRobot && <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />}
                </label>
              </div>

              {/* Submit button — disabled until all filled + robot checked */}
              <motion.button
                type="submit"
                disabled={!canSubmit}
                whileHover={canSubmit ? { scale: 1.02 } : {}}
                whileTap={canSubmit ? { scale: 0.97 } : {}}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all glass
                  ${canSubmit
                    ? 'bg-sky-500 hover:bg-sky-600 cursor-pointer text-white shadow-lg'
                    : 'bg-zinc-300 dark:bg-zinc-700 cursor-not-allowed opacity-50 dark:text-zinc-400 text-zinc-500'
                  }`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {loading ? 'Sending...' : !allFilled ? 'Fill All Required Fields' : !isRobot ? 'Confirm You\'re Not a Robot' : 'Send Message'}
              </motion.button>

              {/* Feedback messages */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/30"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Message sent! I'll reply soon. 🚀 Check your email for confirmation.</span>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-start gap-2 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/30"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
          </div>
    </section>
  );
}