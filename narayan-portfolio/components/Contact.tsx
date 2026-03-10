// components/Contact.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Import from our new lib

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isRobot, setIsRobot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobot) {
      setError('Please confirm you are not a robot.');
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        ip: 'demo-ip', // In production, add real IP detection if needed
      });
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsRobot(false);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Oops! Message failed to send. Try again or email directly.');
      console.error('Firestore error:', err);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Let's build something secure and innovative together. Drop a message—I'm all ears for Web3, Cybersecurity, or IoT collabs!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold">Email Me</h3>
              </div>
              <p className="text-zinc-300">narayangawade684@gmail.com</p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold">Call/Text</h3>
              </div>
              <p className="text-zinc-300">+91 8975347452</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 focus:border-sky-400 outline-none text-white placeholder-zinc-500 pb-2 text-lg"
                  required
                />
              </div>

              <div className="glass p-6 rounded-2xl">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 focus:border-sky-400 outline-none text-white placeholder-zinc-500 pb-2 text-lg"
                  required
                />
              </div>

              <div className="glass p-6 rounded-2xl">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g., Web3 Project Collab)"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 focus:border-sky-400 outline-none text-white placeholder-zinc-500 pb-2 text-lg"
                />
              </div>

              <div className="glass p-6 rounded-2xl">
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 focus:border-sky-400 outline-none text-white placeholder-zinc-500 pb-2 text-lg resize-none"
                  required
                />
              </div>

              {/* reCAPTCHA Simulation */}
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRobot}
                    onChange={(e) => setIsRobot(e.target.checked)}
                    className="w-5 h-5 text-sky-500 rounded focus:ring-sky-500"
                  />
                  <span className="text-sm text-zinc-400">I am not a robot</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 rounded-2xl font-semibold text-lg transition-all active:scale-95 glass"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Feedback */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/30"
                >
                  <CheckCircle className="w-5 h-5" />
                  Message sent! I'll reply soon. 🚀
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/30"
                >
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}