import React from "react";
import { tags } from "../data/headerTags";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTag = () => {
  return (
    <div>
      {tags.map((tag, index) => (
        <button
          key={index}
          type="button"
          className="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-full text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-1 mb-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700"
        >
          <FontAwesomeIcon icon={tag.icon} className={`mr-1 ${tag.color}`} />
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default HeaderTag;
