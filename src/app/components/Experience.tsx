"use client";

export default function Experience() {
  return (
    <section id="edu"className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-900">
      <h2 className="text-4xl font-extrabold mb-10">Experience & Education</h2>

      {/* Current Role */}
      <div className="mb-10 flex items-center space-x-4">
        <img
          src="/images/fintrex.png"
          alt="Fintrex Finance PLC Logo"
          className="w-16 h-16 object-contain rounded-md shadow-md"
          loading="lazy"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-1">Software Developer Intern</h3>
          <p className="text-gray-700 mb-1">Fintrex Finance PLC</p>
          <p className="text-gray-600 italic">Currently working</p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Education</h3>

        {/* University */}
        <div className="mb-6 flex items-center space-x-4">
          <img
            src="/images/uow.png"
            alt="University of Westminster Logo"
            className="w-16 h-16 object-contain rounded-md shadow-md"
            loading="lazy"
          />
          <img
            src="/images/iit.png"
            alt="Informatics Institute of Technology Logo"
            className="w-16 h-16 object-contain rounded-md shadow-md"
            loading="lazy"
          />
          <div>
            <h4 className="text-xl font-medium">
              University of Westminster (via Informatics Institute of Technology)
            </h4>
            <p className="text-gray-700">
              BEng (Hons) Software Engineering — Second Class Honours (2:2)
            </p>
          </div>
        </div>

       {/* Lyceum + Cambridge logos */}
<div className="mb-6 flex flex-wrap items-center space-x-4 space-y-4 sm:space-y-0">
  <img
    src="/images/lyceum.png"
    alt="Lyceum International School Logo"
    className="w-16 h-16 object-contain rounded-md shadow-md flex-shrink-0"
    loading="lazy"
  />
  <img
    src="/images/cambridge.png"
    alt="Cambridge Exam Board Logo"
    className="w-16 h-16 object-contain rounded-md shadow-md flex-shrink-0"
    loading="lazy"
  />
  <div className="flex-1 min-w-[250px]">
    <h4 className="text-xl font-medium">Lyceum International School, Nugegoda</h4>
    <p className="text-gray-700">
      Completed GCE Ordinary Levels (O/Ls) and Advanced Levels (A/Ls) under Cambridge Assessment International Education
    </p>
  </div>
</div>
        
      </div>
    </section>
  );
}
