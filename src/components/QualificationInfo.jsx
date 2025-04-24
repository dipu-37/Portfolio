
import React from 'react'
import { qualifications } from '../data/qualification'

const QualificationInfo = () => {
  return (
    <div>
      {qualifications.map((quali, index) => (
    <li className="mb-10 ml-4" key={index}>
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex items-center">
        <time className="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">
          {quali.year}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {quali.title}
          {quali.link && (
            <a
              href={quali.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3"
            >
              <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
            </a>
          )}
        </h3>
      </div>
      <p className="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">
        {quali.description}
      </p>
      <p className="text-base font-light text-gray-800 dark:text-gray-400">
        <span title={quali.institute.name}>{quali.institute.shortName}</span> &bull;{" "}
        {quali.institute.duration}
      </p>
    </li>
  ))}
    </div>
  )
}

export default QualificationInfo
