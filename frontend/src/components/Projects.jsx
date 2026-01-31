
import api from "../api/api.js";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get('/projects');
      setProjects(data);
      console.log("projects fetch success")
    } catch (error) {
      console.log("project fetch failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center">Loading projects...</p>;
  }

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="
      grid sm:grid-cols-2 lg:grid-cols-3
      gap-10
      px-6
      max-w-7xl
      mx-auto
      mt-10
      ">
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="
    bg-white rounded-2xl overflow-hidden
    shadow-md
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl
    group
  ">
    {/* Image */}
    <div className="overflow-hidden">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="
          h-56 w-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mt-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-green-600 text-sm font-medium hover:underline"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  </div>
);


export default Projects;
