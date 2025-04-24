import React from "react";
import "devicon/devicon.min.css";
import { techSkills } from "../data/techSkillsData";



const TechSkills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      {techSkills.map((category, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold  mb-4">{category.title}</h2>
          <div className="flex flex-col space-y-2">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                <span
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                ></span>
                <span>{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechSkills;