"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="edu"
      className="max-w-4xl mx-auto px-6 py-12 text-gray-900"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-center sm:text-left">
        Experience & Education
      </h2>

      {/* Current Role */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <Image
          src="/images/fintrex.png"
          alt="Fintrex Finance PLC Logo"
          width={96}
          height={96}
          className="w-24 h-24 sm:w-16 sm:h-16 object-contain rounded-md shadow-md mx-auto sm:mx-0"
          priority
        />
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-1">Software Developer Intern</h3>
          <p className="text-gray-700 mb-1">Fintrex Finance PLC</p>
          <p className="text-gray-600 italic">Currently working</p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
          Education
        </h3>

        {/* University */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex space-x-4 justify-center sm:justify-start">
            <Image
              src="/images/uow.png"
              alt="University of Westminster Logo"
              width={80}
              height={80}
              className="w-20 h-20 sm:w-16 sm:h-16 object-contain rounded-md shadow-md"
            />
            <Image
              src="/images/iit.png"
              alt="Informatics Institute of Technology Logo"
              width={80}
              height={80}
              className="w-20 h-20 sm:w-16 sm:h-16 object-contain rounded-md shadow-md"
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-medium">
              University of Westminster (via Informatics Institute of Technology)
            </h4>
            <p className="text-gray-700">
              BEng (Hons) Software Engineering — Second Class Honours (2:2)
            </p>
          </div>
        </div>

        {/* Lyceum + Cambridge logos */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex space-x-4 justify-center sm:justify-start">
            <Image
              src="/images/lyceum.png"
              alt="Lyceum International School Logo"
              width={80}
              height={80}
              className="w-20 h-20 sm:w-16 sm:h-16 object-contain rounded-md shadow-md flex-shrink-0"
            />
            <Image
              src="/images/cambridge.png"
              alt="Cambridge Exam Board Logo"
              width={80}
              height={80}
              className="w-20 h-20 sm:w-16 sm:h-16 object-contain rounded-md shadow-md flex-shrink-0"
            />
          </div>
          <div className="flex-1 min-w-[250px] text-center sm:text-left">
            <h4 className="text-xl font-medium">
              Lyceum International School, Nugegoda
            </h4>
            <p className="text-gray-700">
              Completed GCE Ordinary Levels (O/Ls) and Advanced Levels (A/Ls) under Cambridge Assessment International Education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
