import "./skills.css";

const skills = [
  { name: "React.js", img: "/skills/React.png" },
  { name: "Node.js", img: "/skills/Node.png" },
  { name: "MongoDB", img: "/skills/MongoDB.png" },
  { name: "Tailwind", img: "/skills/Tailwind.png" },
  { name: "Redux Toolkit", img: "/skills/Redux.png" },
  { name: "MySQL", img: "/skills/MySQL.png" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
        Skills
      </h2>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden group">
        <div className="marquee">
          {/* FIRST SET */}
          <div className="marquee__content m-5">
            {skills.map((skill, index) => (
              <SkillCard key={`a-${index}`} skill={skill} />
            ))}
          </div>

          {/* SECOND SET (DUPLICATE) */}
          <div className="marquee__content m-5">
            {skills.map((skill, index) => (
              <SkillCard key={`b-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <div className="group/card flex flex-col items-center min-w-35">
    <div
      className="
        w-40 h-40 flex items-center justify-center
        rounded-2xl bg-white
        border border-gray-200
        transition-all duration-300
        group-hover/card:border-blue-500
        group-hover/card:shadow-[0_0_25px_rgba(59,130,246,0.35)]
        group-hover/card:-translate-y-2 m-5
      "
    >
      <img
        src={skill.img}
        alt={skill.name}
        className="w-24 h-24 object-contain"
      />
    </div>

    <p
      className="
        mt-3 text-xl font-medium
        text-gray-700
        transition-colors duration-300
        group-hover/card:text-blue-500
      "
    >
      {skill.name}
    </p>
  </div>
);

export default Skills;
