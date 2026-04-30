import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/common/SEO';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-4">
      <SEO title="Admin Login" description="Secure access to EMFTECH administrative panel" noindex />
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-10 relative z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EMFTECH Admin
          </h1>
          <p className="text-gray-400 mt-2">Secure access to control panel</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                defaultValue="irobiul159@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="admin@emftech.online"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
          >
            Login to Dashboard
            <ArrowRight size={20} className="ml-2" />
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-500">
          Authorized personnel only. All access is logged and monitored.
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
