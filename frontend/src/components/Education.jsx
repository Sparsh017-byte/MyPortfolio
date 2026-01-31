const educationData = [
  {
    institute: "Maulana Azad National Institute of Technology, Bhopal",
    degree: "Bachelor of Technology",
    field: "Electrical Engineering",
    duration: "July 2022 – Present",
  },
  {
    institute: "Kendriya Vidyalaya Sangathan, Seoni",
    degree: "Senior Secondary (Class XII)",
    field: "CBSE, Madhya Pradesh",
    duration: "July 2020 – July 2021",
  },
  {
    institute: "Kendriya Vidyalaya Sangathan, Seoni",
    degree: "Secondary (Class X)",
    field: "CBSE, Madhya Pradesh",
    duration: "July 2018 – July 2019",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-indigo-500 uppercase mb-3">
          Education
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Academic Background
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="
                bg-gray-50 border border-gray-200
                rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                animate-fadeInUp
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {edu.institute}
              </h3>

              <p className="text-indigo-500 font-medium">
                {edu.degree}
              </p>

              <p className="text-gray-600 mt-1">
                {edu.field}
              </p>

              <p className="text-sm text-gray-500 mt-4">
                {edu.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

