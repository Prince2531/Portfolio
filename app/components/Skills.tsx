import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaNetworkWired,
  FaPython,
} from "react-icons/fa";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaPython size={140} />, label: "Python" },
  {icon: <FaLinux size={140}/>, label: "Linux"},
  {icon: <FaNetworkWired size={140}/>, label: "Computer Networking"},
  {icon: <FaJsSquare size={140}/> , label: "Javascript"}
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => {
            return (
              <div
                key={index}
                className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between
                                items-center bg-white/10 p-4 rounded-xl"
              >
                {skill.icon}
                <p className="mt-2">{skill.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
