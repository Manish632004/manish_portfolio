import { RevealOnScroll } from "../RevealOnScroll";
export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex  items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Jarvis – AI-Powered Personal Assistant
              </h3>
              <p className="text-gray-400 mb-4">
                A fully local personal assistant built using Python, capable of
                performing smart tasks, answering queries, and managing local
                resources efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Groq", "Huggingface"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Manish632004/Jarvis-Ai-assistant"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Sidcup Family Golf – Interactive Frontend Website(clone)
              </h3>
              <p className="text-gray-400 mb-4">
                A visually engaging and responsive frontend for Sidcup Family
                Golf, built using HTML, CSS, and JavaScript. Features include
                smooth animations, responsive layouts, and user-friendly
                navigation to deliver a delightful experience for visitors
                across all devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Manish632004/sidcupclone"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">My Developer Portfolio</h3>
              <p className="text-gray-400 mb-4">
               A sleek and fully responsive personal portfolio crafted using React and TailwindCSS.
Showcases my featured projects, skills, and contact information with clean UI, smooth animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html", "CSS", "JavaScript", "React","TailwindCss"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className=" bg-blue-500/10 text-blue-500 py-1 px-3 
                rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://manish632004.github.io/manish_portfolio/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Food Delivery Website – Frontend UI
</h3>
              <p className="text-gray-400 mb-4">
               A modern and responsive frontend UI for a food delivery service, built using HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-smtransition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
