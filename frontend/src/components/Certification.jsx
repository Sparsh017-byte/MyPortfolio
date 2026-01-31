import React from "react";

const certificates = [
  {
    title: "SQL - (Basics)",
    issuer: "HackerRank",
    img: "/certificates/MySQL.png",
    link: "https://www.hackerrank.com/certificates/dc226bbf7d1b",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    img: "/certificates/SoftwareEnginnerIntern.png",
    link: "https://www.hackerrank.com/certificates/daf185bbee49",
  },
  {
    title: "Problem Solving Basics",
    issuer: "Hacker Rank",
    img: "/certificates/ProblemSolving.png",
    link: "https://www.hackerrank.com/certificates/ac0f7e05a540",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="
                group bg-gray-50 rounded-2xl overflow-hidden
                shadow-md transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Certificate Image */}
              <div className="overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="
                    h-56 w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certification;

