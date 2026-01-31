const About = () => {
  return (
    <section
      id="about"
      className="
        py-24 px-6 md:px-16 lg:px-24 xl:px-32
        bg-gray-50
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto animate-fade-up">

        {/* Heading */}
        <p className="text-sm tracking-widest text-indigo-500 uppercase mb-3">
          About Me
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Who I Am
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT TEXT */}
          <div
            className="
              text-gray-600
              leading-relaxed space-y-5
              animate-fade-up animate-delay-1
            "
          >
            <p>
              Hi, I’m{" "}
              <span className="font-medium text-gray-900">
                Sparsh Gumasta
              </span>
              , a student at{" "}
              <span className="font-medium text-gray-900">
                NIT Bhopal
              </span>{" "}
              graduating in 2026.
            </p>

            <p>
              I’m a strong problem solver with{" "}
              <span className="font-medium text-indigo-500">
                1000+ problems solved
              </span>{" "}
              on platforms like LeetCode, Codeforces, and GeeksforGeeks.
            </p>

            <p>
              Alongside competitive programming, I work as a{" "}
              <span className="font-medium text-gray-900">
                Full Stack Developer
              </span>
              , building scalable and performant web applications.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 animate-fade-up animate-delay-2">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Problems Solved", value: "1000+" },
                { label: "Graduation", value: "2026" },
                { label: "Stack", value: "MERN" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="
                    p-5 rounded-xl
                    bg-white
                    border border-gray-200
                    text-center
                    transition transform
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  <h3 className="text-2xl font-bold text-indigo-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="animate-fade-up animate-delay-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "MySQL",
                  "Redux Toolkit",
                  "Three.js",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2 text-sm rounded-full
                      bg-gray-100
                      text-gray-700
                      transition transform
                      hover:-translate-y-0.5 hover:bg-indigo-100
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

