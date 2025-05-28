"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, Diff, Atom, Cog, 
  InspectionPanel, Shield, Cpu, Award, 
  User, BookOpen, Target, ChevronDown,
  ExternalLink, Calendar
} from "lucide-react";

// JSON data structure
const profileData = {
  personal: {
    name: "Thomas Bell",
    title: "Engineering & Materials Science Student",
    location: "Milton Keynes, Bucks",
    email: "thomas@thomasjbell.co.uk",
    linkedin: "https://www.linkedin.com/in/thomasbell2/",
    image: "/images/thomas-bell.png",
    summary: "An enthusiastic, personable and inquisitive student with confident communication skills and a love of learning. I study Engineering, Maths and Physics and am very interested in materials science and experimental/armour defence systems. However, I am fascinated by any kind of advanced technology or engineering projects and love to learn more about physics and tech."
  },
  skills: {
    technical: [
      "Problem Solving",
      "CAD & 3D Printing", 
      "Python Programming",
      "React Development",
      "Mathematical Analysis"
    ],
    personal: [
      "Articulate Communication",
      "Team Leadership", 
      "Independent Work",
      "Initiative Taking",
      "Analytical Thinking"
    ]
  },
  interests: [
    { name: "Mathematics", icon: Diff, color: "bg-blue-600" },
    { name: "Physics", icon: Atom, color: "bg-purple-600" },
    { name: "Engineering", icon: Cog, color: "bg-orange-600" },
    { name: "Materials Science", icon: InspectionPanel, color: "bg-green-600" },
    { name: "Armour Defence", icon: Shield, color: "bg-gray-700" },
    { name: "Advanced Technology", icon: Cpu, color: "bg-indigo-600" }
  ],
  hobbies: [
    { name: "Rock Climbing", emoji: "🧗", description: "Indoor and outdoor climbing" },
    { name: "Photography", emoji: "📸", description: "Landscape and wildlife" },
    { name: "Hiking", emoji: "🥾", description: "Mountain and countryside walks" },
    { name: "Gaming", emoji: "🎮", description: "Strategy and simulation games" },
    { name: "Piano", emoji: "🎹", description: "Classical and contemporary pieces" }
  ],
  qualifications: {
    current: [
      { subject: "A Level Mathematics", grade: "A* (Predicted)", level: "A Level" },
      { subject: "A Level Physics", grade: "A* (Predicted)", level: "A Level" },
      { subject: "AS Level Computer Science", grade: "A (Predicted)", level: "AS Level" },
      { subject: "EAL Engineering", grade: "Distinction* (Predicted)", level: "BTEC" }
    ],
    achieved: [
      { subject: "GCSE Mathematics", grade: "8", level: "GCSE" },
      { subject: "GCSE Physics", grade: "8", level: "GCSE" },
      { subject: "GCSE Chemistry", grade: "8", level: "GCSE" },
      { subject: "GCSE Computer Science", grade: "8", level: "GCSE" },
      { subject: "GCSE English Literature", grade: "7", level: "GCSE" },
      { subject: "GCSE Product Design", grade: "7", level: "GCSE" },
      { subject: "GCSE English Language", grade: "6", level: "GCSE" },
      { subject: "BTEC Digital Information Technology", grade: "Merit", level: "BTEC" },
      { subject: "Cambridge Nationals Engineering", grade: "Distinction*", level: "Cambridge" },
      { subject: "EAL Engineering", grade: "Distinction", level: "BTEC" }
    ]
  }
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const slideIn = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 }
};

const GradeCard = ({ qualification, index }) => {
  const getGradeColor = (grade) => {
    if (grade.includes('A*') || grade.includes('Distinction*') || grade === '8' || grade === '9') 
      return 'bg-emerald-600';
    if (grade.includes('A') || grade.includes('Distinction') || grade === '7') 
      return 'bg-blue-600';
    if (grade.includes('B') || grade.includes('Merit') || grade === '6') 
      return 'bg-orange-600';
    return 'bg-gray-600';
  };

  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ 
        scale: 1.01, 
        y: -1,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-tight">
          {qualification.subject}
        </h4>
        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full whitespace-nowrap shrink-0 ml-2">
          {qualification.level}
        </span>
      </div>
      <motion.div 
        className={`${getGradeColor(qualification.grade)} text-white text-center py-2 px-3 rounded-md font-bold text-sm`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {qualification.grade}
      </motion.div>
    </motion.div>
  );
};

const HobbyCard = ({ hobby, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.01,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      <div className="text-center relative z-10">
        <motion.div 
          className="text-4xl mb-3"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 2 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {hobby.emoji}
        </motion.div>
        <motion.h4 
          className="font-semibold text-slate-800 dark:text-slate-200 mb-2"
          animate={{ y: isHovered ? -1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {hobby.name}
        </motion.h4>
        <AnimatePresence>
          {isHovered && (
            <motion.p 
              initial={{ opacity: 0, y: 5, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -5, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-sm text-slate-600 dark:text-slate-400 overflow-hidden"
            >
              {hobby.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      {/* Subtle hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function BiographyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'skills', name: 'Skills', icon: Target },
    { id: 'interests', name: 'Interests', icon: BookOpen },
    { id: 'qualifications', name: 'Qualifications', icon: Award }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={profileData.personal.image}
                  alt={profileData.personal.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-slate-200 dark:border-slate-600 shadow-lg"
                />
              </motion.div>
              <div className="flex-1 text-center lg:text-left">
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {profileData.personal.name}
                </motion.h1>
                <motion.p 
                  className="text-xl text-slate-600 dark:text-slate-400 mb-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {profileData.personal.title}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.a 
                    href={`mailto:${profileData.personal.email}`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300 border border-blue-200 dark:border-blue-700"
                  >
                    <Mail size={18} />
                    <span className="text-sm font-medium">Email</span>
                  </motion.a>
                  <motion.a 
                    href={profileData.personal.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300 border border-blue-200 dark:border-blue-700"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </motion.a>
                  <motion.div 
                    className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600"
                    whileHover={{ scale: 1.01 }}
                  >
                    <MapPin size={18} />
                    <span className="text-sm font-medium">{profileData.personal.location}</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 font-semibold ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <motion.div
                      animate={{ 
                        rotate: activeSection === section.id ? 180 : 0,
                        scale: activeSection === section.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <span className="text-base">{section.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div 
              key="overview"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <motion.h2 
                  className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Personal Summary
                </motion.h2>
                <motion.p 
                  className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {profileData.personal.summary}
                </motion.p>
              </motion.div>
              
              {/* Hobbies Grid */}
              <motion.div 
                variants={fadeInUp}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <motion.h3 
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hobbies & Activities
                </motion.h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {profileData.hobbies.map((hobby, index) => (
                    <HobbyCard key={hobby.name} hobby={hobby} index={index} />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'skills' && (
            <motion.div 
              key="skills"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Cpu className="text-blue-600" />
                  Technical Skills
                </motion.h3>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {profileData.skills.technical.map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      variants={slideIn}
                      whileHover={{ x: 3, scale: 1.01 }}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300"
                    >
                      <motion.div 
                        className="w-3 h-3 bg-blue-600 rounded-full"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <User className="text-purple-600" />
                  Personal Skills
                </motion.h3>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {profileData.skills.personal.map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      variants={slideIn}
                      whileHover={{ x: 3, scale: 1.01 }}
                      className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300"
                    >
                      <motion.div 
                        className="w-3 h-3 bg-purple-600 rounded-full"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'interests' && (
            <motion.div 
              key="interests"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <motion.h2 
                className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Areas of Interest
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {profileData.interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div 
                      key={interest.name} 
                      className="group"
                      variants={scaleIn}
                      whileHover={{ 
                        scale: 1.02, 
                        y: -2,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      <div className={`${interest.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}>
                        <div className="text-center text-white">
                          <motion.div
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 5,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Icon size={40} className="mx-auto mb-4" />
                          </motion.div>
                          <h4 className="font-semibold text-lg">{interest.name}</h4>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'qualifications' && (
            <motion.div 
              key="qualifications"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Current Studies */}
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Calendar className="text-blue-600" />
                  Current Studies (A-Level)
                </motion.h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {profileData.qualifications.current.map((qual, index) => (
                    <GradeCard key={qual.subject} qualification={qual} index={index} />
                  ))}
                </motion.div>
              </motion.div>

              {/* Achieved Qualifications */}
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Award className="text-emerald-600" />
                  Achieved Qualifications
                </motion.h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {profileData.qualifications.achieved.map((qual, index) => (
                    <GradeCard key={qual.subject} qualification={qual} index={index} />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}