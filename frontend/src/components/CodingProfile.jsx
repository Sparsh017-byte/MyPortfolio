import React from "react";

const codingProfiles = [
  {
    title: "LeetCode",
    username: "Sparsh017",
    img: "/profiles/leetcode.png",
    link: "https://leetcode.com/u/Sparsh017/",
  },
  {
    title: "Codeforces",
    username: "Sparsh017",
    img: "/profiles/codeforces.png",
    link: "https://codeforces.com/profile/Sparsh017",
  },
  {
    title: "GeeksforGeeks",
    username: "sparshgum6cap",
    img: "/profiles/gfg.png",
    link: "https://www.geeksforgeeks.org/profile/sparshgum6cap",
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-24 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Coding Profiles
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
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
              {/* Platform Image */}
              <div className="overflow-hidden bg-white flex items-center justify-center p-6">
                <img
                  src={profile.img}
                  alt={profile.title}
                  className="
                    h-24 object-contain
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">
                  {profile.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  @{profile.username}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
