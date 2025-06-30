export default function EducationSection() {
  const educationData = [
    {
      degree: "Bachelor of Science (B.Sc.) in ICT",
      institution: "Comilla University",
      duration: "2023 – Present",
      description:
        "Currently pursuing my Honours degree in Information and Communication Technology. I’ve built a strong foundation in programming, computer networks, software engineering, and database systems.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gridokalindia Hazera Hasmot Degree College",
      duration: "2019 – 2021",
      description:
        "Completed HSC in Science stream with a strong interest in technology and problem solving. Developed analytical and mathematical thinking through academic subjects.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-50 dark:bg-[#0f172a] py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          🎓 Education & Qualifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 min-h-[300px]"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  📅 {edu.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
