const Introduction = () => {
  return (
    <section
      className="
        min-h-screen flex mt-10 items-center
        px-6 md:px-16 lg:px-24 xl:px-32
        bg-gray-50
        transition-colors duration-300
      "
    >
      <div
        className="
          w-full flex flex-col-reverse md:flex-row
          items-center justify-between gap-12
        "
      >
        {/* LEFT - TEXT */}
        <div
          className="
            max-w-xl text-center md:text-left
            animate-fadeInUp
          "
        >
          <p className="text-sm tracking-widest text-indigo-500 uppercase mb-3">
            Introduction
          </p>

          <h1
            className="
              text-4xl md:text-5xl font-bold
              text-gray-900 leading-tight
            "
          >
            Hi, I’m <span className="text-indigo-500">Sparsh</span> 👋
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Full Stack Developer (MERN) • Redux-Toolkit • Three.js
          </p>

          <p className="mt-6 text-gray-600">
            I build scalable web apps and love solving
            challenging problems with clean, efficient code.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-full
                bg-indigo-500 text-white font-medium
                hover:bg-indigo-600 transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3 rounded-full
                border border-gray-300
                text-gray-900
                hover:bg-gray-100 transition
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT - PHOTO */}
        <div className="relative animate-fadeIn">
          <div
            className="
              w-56 h-56 md:w-72 md:h-72
              rounded-full overflow-hidden
              border-4 border-indigo-500/70
            "
          >
            <img
              src="/me.jpg"
              alt="Sparsh Gumasta"
              className="w-full h-full object-cover"
            />
          </div>

          {/* subtle glow */}
          <div
            className="
              absolute inset-0 rounded-full
              bg-indigo-500/20 blur-3xl -z-10
            "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;


