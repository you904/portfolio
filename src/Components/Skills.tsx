import { skillsData } from "../User";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="px-16 md-mx:px-6 my-10 font-mono" id="Skills">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        <div className="w-full my-12">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
  <div
    key={id}
    className="w-36 min-w-fit flex flex-col items-center justify-center m-3 sm:m-5 rounded-lg transition-all duration-500 hover:scale-[1.12] cursor-pointer group"
  >
    <div className="w-full rounded-lg border border-primaryColor mb-5 transition-all duration-500 hover:shadow-[0_0_15px_2px_#64FFDA80]">
      
      {/* top glow line */}
      <div className="flex justify-center">
        <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primaryColor to-transparent opacity-40 group-hover:opacity-100 transition-all" />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 p-6">
        
        {/* ICON */}
        <div className="h-10 flex items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* TEXT */}
        <p className="text-white text-sm sm:text-lg text-center">
          {skill.name}
        </p>

      </div>
    </div>
  </div>
))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default Skills;
