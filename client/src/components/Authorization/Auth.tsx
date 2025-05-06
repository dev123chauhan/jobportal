import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Login from './Login';
import Register from './Register';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Animated Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br btn justify-center items-center">
        <motion.div
          className="text-white text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {isLogin ? "Welcome Back!" : "Join Us Today!"}
        </motion.div>
      </div>

      {/* Form Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-100">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tab Switcher */}
          <div className="flex mb-8">
            <button
              className={`flex-1 py-2 ${isLogin ? 'borderBottomColor' : 'text-gray-500'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 ${!isLogin ? 'borderBottomColor' : 'text-gray-500'}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {/* Form */}
          {isLogin ? <Login /> : <Register />}
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;