// src/components/LoadingScreen.jsx
"use client";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50/80 dark:bg-slate-900/80"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.15, delay: 0.05 }}
            className="relative"
          >
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-12 h-12 border-2 border-slate-200/30 dark:border-slate-700/30 rounded-full"
            >
              <div className="absolute inset-0 border-2 border-transparent border-t-slate-600 dark:border-t-slate-300 rounded-full"></div>
            </motion.div>
            
            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-1 w-10 h-10 border-2 border-slate-300/20 dark:border-slate-600/20 rounded-full"
            >
              <div className="absolute inset-0 border-2 border-transparent border-b-slate-500 dark:border-b-slate-400 rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}