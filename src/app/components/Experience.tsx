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
      <div className="mb-10 flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          <Image
            src="/images/fintrex.png"
            alt="Fintrex Finance PLC Logo"
            width={72}
            height={72}
            className="object-contain rounded-md shadow-md"
            priority
          />
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left leading-tight">
          <h3 className="text-2xl font-semibold mb-0.5">
            Software Developer Intern
          </h3>
          <p className="text-gray-700 mb-0.5">Fintrex Finance PLC</p>
          <p className="text-gray-600 italic">Currently working</p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">
          Education
        </h3>

        {/* University */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
          <div className="flex space-x-4 justify-center sm:justify-start">
            <Image
              src="/images/uow.png"
              alt="University of Westminster Logo"
              width={80}
              height={80}
              className="object-contain rounded-md shadow-md"
            />
            <Image
              src="/images/iit.png"
              alt="Informatics Institute of Technology Logo"
              width={80}
              height={80}
              className="object-contain rounded-md shadow-md"
            />
          </div>

          <div className="text-center sm:text-left leading-tight">
            <h4 className="text-xl font-medium">
              University of Westminster (via Informatics Institute of Technology)
            </h4>
            <p className="text-gray-700">
              BEng (Hons) Software Engineering — Second Class Honours (2:2)
            </p>
          </div>
        </div>

        {/* Lyceum + Cambridge logos */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
          <div className="flex space-x-4 justify-center sm:justify-start">
            <Image
              src="/images/lyceum.png"
              alt="Lyceum International School Logo"
              width={80}
              height={80}
              className="object-contain rounded-md shadow-md flex-shrink-0"
            />
            <Image
              src="/images/cambridge.png"
              alt="Cambridge Exam Board Logo"
              width={80}
              height={80}
              className="object-contain rounded-md shadow-md flex-shrink-0"
            />
          </div>

          <div className="flex-1 min-w-[250px] text-center sm:text-left leading-tight">
            <h4 className="text-xl font-medium">
              Lyceum International School, Nugegoda
            </h4>
            <p className="text-gray-700">
              Completed GCE Ordinary Levels (O/Ls) and Advanced Levels (A/Ls)
              under Cambridge Assessment International Education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
