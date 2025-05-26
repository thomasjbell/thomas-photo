"use-client";
import Image from "next/image";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Diff } from "lucide-react";
import { Atom } from "lucide-react";
import { Cog } from "lucide-react";
import { InspectionPanel } from "lucide-react";
import { Shield } from "lucide-react";
import { Cpu } from "lucide-react";

export default function BiographyPage() {
  return (
    <div className="min-h-screen py-14 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center">
          <div>
            {/* Desktop */}
            <h1 className="hidden lg:block text-4xl font-bold text-right text-slate-900 dark:text-slate-50 my-auto">
              T H O M A S &nbsp; B E L L
            </h1>
            {/* Mobile */}
            <h1 className="lg:hidden text-4xl font-bold text-center text-slate-900 dark:text-slate-50 my-4">
              B I O G R A P H Y
            </h1>
          </div>
          <div className="">
            <Image
              src="/images/thomas-bell.png"
              alt="Thomas Bell"
              className="mx-auto mb-6 rounded-full drop-shadow-md dark:border-2 border-slate-800 dark:border-slate-50"
              width={200}
              height={200}
            />
          </div>

          <div>
          {/* Desktop */}
            <h1 className="hidden lg:block text-4xl font-bold text-left text-slate-900 dark:text-slate-50 my-auto">
              B I O G R A P H Y
            </h1>
            {/* Mobile */}
            <h1 className="lg:hidden text-4xl font-bold text-center text-slate-900 dark:text-slate-50 my-4">
              T H O M A S &nbsp; B E L L
            </h1>
          </div>

          <div className="flex justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#64748b"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/thomasbell2/"
              target="_blank"
              className="text-slate-900 dark:text-slate-100 hover:scale-103 transition duration-400 ease-in-out hover:drop-shadow-sm"
            >
              &nbsp; &nbsp; LinkedIn
            </a>
          </div>

          <div className="flex justify-center mt-4">
            <Mail color="#64748b" />
            <a
              href="mailto:thomas@thomasjbell.co.uk"
              target="_blank"
              className="text-slate-900 dark:text-slate-100 hover:scale-103 transition duration-400 ease-in-out hover:drop-shadow-sm"
            >
              &nbsp; &nbsp; thomas@thomasjbell.co.uk
            </a>
          </div>

          <div className="flex justify-center mt-4">
            <MapPin color="#64748b" />
            <a
              href="https://maps.app.goo.gl/9HhU5P1jAEBxHHRe6"
              target="_blank"
              className="text-slate-900 dark:text-slate-100 hover:scale-103 transition duration-400 ease-in-out hover:drop-shadow-sm"
            >
              &nbsp; &nbsp; Milton Keynes, Bucks
            </a>
          </div>
        </div>
        <hr className="my-12 border-1 rounded-full border-slate-500" />

        <div>
          <h2 className="text-3xl text-slate-900 font-bold dark:text-slate-50 text-center my-8 lg:my-12">
            P E R S O N A L &nbsp; S U M M A R Y
          </h2>
        </div>

        <p className="text-lg text-slate-800 dark:text-slate-300 mb-6 px-6 text-center justify-center">
          An enthusiastic, personable and inquisitive student with confident
          communication skills and a love of learning. I study Engineering,
          Maths and Physics and am very interested in materials science and
          experimental/armour defence systems. However, I am fascinated by any
          kind of advanced technology or engineering projects and love to learn
          more about physics and tech.
        </p>
        <div>
          <h2 className="text-3xl text-slate-900 font-bold dark:text-slate-50 text-center my-8 lg:my-12 ">
            S K I L L S, &nbsp; H O B B I E S &nbsp; A N D &nbsp; I N T E R E S
            T S
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-lg text-slate-800 dark:text-slate-300 mb-6 text-center">
          <div>
            <h3 className="lg:hidden text-2xl text-slate-900 dark:text-slate-50">S K I L L S</h3>
            <ul className=" mb-6 text-center  my-2">
              <li>
                <p> <span className="text-slate-500">‣</span> &nbsp; &nbsp;Problem Solving</p>
              </li>
              <li>
                <p><span className="text-slate-500">‣</span> &nbsp; &nbsp;Numerate</p>
              </li>
              <li>
                <p><span className="text-slate-500">‣</span> &nbsp; &nbsp;Articulate</p>
              </li>
              <li>
                <p><span className="text-slate-500">‣</span> &nbsp; &nbsp;Team/Independent Work</p>
              </li>
              <li>
                <p><span className="text-slate-500">‣</span> &nbsp; &nbsp;CAD, 3D Printing, Python and React</p>
              </li>
              <li>
                <p><span className="text-slate-500">‣</span> &nbsp; &nbsp;Initiative</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:hidden text-2xl text-slate-900 dark:text-slate-50">H O B B I E S</h3>
            <ul className="mb-6 text-center my-2">
              <li>
                <p>Climbing</p>
              </li>
              <hr className="my-2 mx-auto w-48 border-y-1 rounded-full border-slate-500" />
              <li>
                <p>Walking</p>
              </li>
              <hr className="my-2 mx-auto w-64 border-y-1 rounded-full border-slate-500" />
              <li>
                <p>Photography</p>
              </li>
              <hr className="my-2 mx-auto w-64 border-y-1 rounded-full border-slate-500" />
              <li>
                <p>Gaming</p>
              </li>
              <hr className="my-2 mx-auto w-48 border-y-1 rounded-full border-slate-500" />
              <li>
                <p>Piano</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:hidden text-2xl text-slate-900 dark:text-slate-50">I N T E R E S T S</h3>
            <ul className="mb-6 text-center my-2">
              <li>
                <p className="flex justify-center my-2">
                  <Diff color="#64748b" /> &nbsp; &nbsp; Maths
                </p>
              </li>
              <li>
                <p className="flex justify-center my-2">
                  <Atom color="#64748b" /> &nbsp; &nbsp; Physics
                </p>
              </li>
              <li>
                <p className="flex justify-center my-2">
                  <Cog color="#64748b" /> &nbsp; &nbsp;Engineering
                </p>
              </li>
              <li>
                <p className="flex justify-center my-2">
                  <InspectionPanel color="#64748b" /> &nbsp; &nbsp;Materials
                  Science
                </p>
              </li>
              <li>
                <p className="flex justify-center my-2">
                  <Shield color="#64748b" /> &nbsp; &nbsp;Armour Defence
                </p>
              </li>
              <li>
                <p className="flex justify-center my-2">
                  <Cpu color="#64748b" /> &nbsp; &nbsp;Advanced Technology
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-slate-900 font-bold dark:text-slate-300 text-center my-8 lg:my-12">
            Q U A L I F I C A T I O N S
          </h2>
        </div>
        <div>
          <h3 className="text-2xl text-slate-800 dark:text-slate-300 text-center my-6">
            L E V E L &nbsp; 3
          </h3>
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 divide-x-2 text-slate-500">
          <div>
            <ul className="text-lg text-slate-800 dark:text-slate-300 mb-6 lg:text-right text-center mx-8">
              <li>
                <p className="font-bold my-2">A Level Maths</p>
              </li>
              <li>
                <p className="font-bold my-2">A Level Physics</p>
              </li>
              <li>
                <p className="font-bold my-2">AS Level Computer Science </p>
              </li>
              <li>
                <p className="font-bold my-2">EAL Engineering</p>
              </li>
            </ul>
          </div>
          <div className="text-lg text-slate-700 dark:text-slate-300 mb-1 lg:text-left text-center">
            <ul>
              <li>
                <p className="my-2">Grade A* (Predicted)</p>
              </li>
              <li>
                <p className="my-2">Grade A* (Predicted)</p>
              </li>
              <li>
                <p className="my-2">Grade A (Predicted)</p>
              </li>
              <li>
                <p className="my-2">Distinction * (Predicted)</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="lg:hidden grid grid-cols-1 gap-2 text-lg text-center text-slate-800 dark:text-slate-300 mb-6">
            <div ><p className="font-bold">A Level Maths</p> <p>Grade A* (Predicted)</p></div>
            <hr className="w-64 mx-auto border-y-1 rounded-full border-slate-500"/>
            <div> <p className="font-bold">A Level Physics</p> <p>Grade A* (Predicted)</p></div>
            <hr className="w-64 mx-auto border-y-1 rounded-full border-slate-500"/>
            <div> <p className="font-bold">AS Level Computer Science</p> <p>Grade A (Predicted)</p></div>
            <hr className="w-64 mx-auto border-y-1 rounded-full border-slate-500"/>
            <div> <p className="font-bold">EAL Engineering</p> <p>Distinction * (Predicted)</p></div>

          </div>
          <h3 className="text-2xl text-slate-800 dark:text-slate-300 text-center my-6">
            L E V E L &nbsp; 2
          </h3>
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 divide-x-2 text-slate-500">
          <div>
            <ul className="text-lg text-slate-800 dark:text-slate-300 mb-6 lg:text-right text-center mx-8">
              <li>
                <p className="font-bold my-2">GCSE Maths</p>
              </li>
              <li>
                <p className="font-bold my-2">GCSE Physics</p>
              </li>
              <li>
                <p className="font-bold my-2">GCSE Chemistry</p>
              </li>
              <li>
                <p className="font-bold my-2">GCSE Computer Science</p>
              </li>
              <li>
                <p className="font-bold my-2">GCSE English Literature</p>
              </li>
              <li>
                <p className="font-bold my-2">GCSE Product Design</p>
              </li>
              <li>
                <p className="font-bold my-2">GCSE English Language</p>
              </li>
              <li>
                <p className="font-bold my-2">
                  BTEC Digital Information Technology
                </p>
              </li>
              <li>
                <p className="font-bold my-2">
                  Cambridge Nationals Engineering
                </p>
              </li>
              <li>
                <p className="font-bold my-2">EAL Engineering</p>
              </li>
            </ul>
          </div>
          <div className="text-lg text-slate-700 dark:text-slate-300 mb-1 lg:text-left text-center">
            <ul>
              <li>
                <p className="my-2">Grade 8</p>
              </li>
              <li>
                <p className="my-2">Grade 8</p>
              </li>
              <li>
                <p className="my-2">Grade 8</p>
              </li>
              <li>
                <p className="my-2">Grade 8</p>
              </li>
              <li>
                <p className="my-2">Grade 7</p>
              </li>
              <li>
                <p className="my-2">Grade 7</p>
              </li>
              <li>
                <p className="my-2">Grade 6</p>
              </li>
              <li>
                <p className="my-2">Merit</p>
              </li>
              <li>
                <p className="my-2">Distinction *</p>
              </li>
              <li>
                <p className="my-2">Distinction</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden grid grid-cols-2 gap-2 text-lg text-center text-slate-800 dark:text-slate-300 mb-6 ">
<div ><p className="font-bold">GCSE Maths</p> <p>Grade 8</p></div>
<div ><p className="font-bold">GCSE Physics</p> <p>Grade 8</p></div>
<div ><p className="font-bold">GCSE Chemistry</p> <p>Grade 8</p></div>
<div ><p className="font-bold">GCSE Computer Science</p> <p>Grade 8</p></div>
<div ><p className="font-bold">GCSE English Literature</p> <p>Grade 7</p></div>
<div ><p className="font-bold">GCSE Product Design</p> <p>Grade 7</p></div>
<div ><p className="font-bold">GCSE English Language</p> <p>Grade 6</p></div>
<div ><p className="font-bold">BTEC Digital Information Technology</p> <p>Merit</p></div>
<div ><p className="font-bold">Cambridge Nationals Engineering</p> <p>Distinction</p></div>
<div ><p className="font-bold">EAL Engineering</p> <p>Distinction *</p></div>
        </div>
      </div>
    </div>
  );
}
