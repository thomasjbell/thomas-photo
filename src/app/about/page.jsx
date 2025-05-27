"use client";
import Image from "next/image";
import { useState } from "react";
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
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-tight">
          {qualification.subject}
        </h4>
        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
          {qualification.level}
        </span>
      </div>
      <div className={`${getGradeColor(qualification.grade)} text-white text-center py-2 px-3 rounded-md font-bold text-sm`}>
        {qualification.grade}
      </div>
    </div>
  );
};

export default function BiographyPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedHobby, setExpandedHobby] = useState(null);

  const sections = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'skills', name: 'Skills', icon: Target },
    { id: 'interests', name: 'Interests', icon: BookOpen },
    { id: 'qualifications', name: 'Qualifications', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative">
                <Image
                  src={profileData.personal.image}
                  alt={profileData.personal.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-slate-200 dark:border-slate-600 shadow-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  {profileData.personal.name}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  {profileData.personal.title}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href={`mailto:${profileData.personal.email}`} 
                     className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300 border border-blue-200 dark:border-blue-700">
                    <Mail size={18} />
                    <span className="text-sm font-medium">Email</span>
                  </a>
                  <a href={profileData.personal.linkedin} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300 border border-blue-200 dark:border-blue-700">
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600">
                    <MapPin size={18} />
                    <span className="text-sm font-medium">{profileData.personal.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Made Much More Prominent */}
        <div className="mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 font-semibold ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-[1.01]'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-base">{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">Personal Summary</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
                {profileData.personal.summary}
              </p>
            </div>
            
            {/* Hobbies Grid */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">Hobbies & Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profileData.hobbies.map((hobby, index) => (
                  <div
                    key={hobby.name}
                    className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:shadow-md transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedHobby(expandedHobby === index ? null : index)}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{hobby.emoji}</div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{hobby.name}</h4>
                      {expandedHobby === index && (
                        <p className="text-sm text-slate-600 dark:text-slate-400">{hobby.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
                <Cpu className="text-blue-600" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {profileData.skills.technical.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
                <User className="text-purple-600" />
                Personal Skills
              </h3>
              <div className="space-y-4">
                {profileData.skills.personal.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'interests' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">Areas of Interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profileData.interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <div key={interest.name} className="group">
                    <div className={`${interest.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      <div className="text-center text-white">
                        <Icon size={40} className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="font-semibold text-lg">{interest.name}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeSection === 'qualifications' && (
          <div className="space-y-8">
            {/* Current Studies */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
                <Calendar className="text-blue-600" />
                Current Studies (A-Level)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {profileData.qualifications.current.map((qual, index) => (
                  <GradeCard key={qual.subject} qualification={qual} index={index} />
                ))}
              </div>
            </div>

            {/* Achieved Qualifications */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
                <Award className="text-emerald-600" />
                Achieved Qualifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {profileData.qualifications.achieved.map((qual, index) => (
                  <GradeCard key={qual.subject} qualification={qual} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}