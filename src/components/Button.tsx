import React from 'react';
import { ButtonProps } from './types';
import { motion } from 'framer-motion';

const Button = (props: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}
      className="bg-purple-400/75 rounded-md px-4 py-3 text-2xl text-gray-100 font-semibold shadow shadow-puple-400/75 hover:shadow-none hover:bg-purple-400/100 transition duration-100"
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
