import React, { useState } from "react";

export const ColumnDropdown = ({ formData, setFormData }) => {
  const [hidden, setHidden] = useState(false);
  function handleChange(event) {
    setFormData({
      ...formData,
      column: event.target.value,
    });
  }
  console.log(formData);
  return (
    <>
      <button
        onClick={() => setHidden(!hidden)}
        id="dropdown-button"
        data-dropdown-toggle="dropdown2"
        className="flex-shrink-0 relative z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        Column Select
        <svg
          aria-hidden="true"
          className="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {hidden && (
        <div className="absolute ml-[180px] bg-gray-300">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Id
          </h3>
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 ">
            <li className="w-full rounded-t-lg border-b border-gray-200 ">
              <div className="flex items-center pl-3">
                <input
                  onChange={handleChange}
                  id="list-radio-license"
                  type="radio"
                  value="id"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-license"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Id
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg border-b border-gray-200 ">
              <div className="flex items-center pl-3">
                <input
                  onChange={handleChange}
                  id="list-radio-license"
                  type="radio"
                  value="title"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-license"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  title
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg border-b border-gray-200 ">
              <div className="flex items-center pl-3">
                <input
                  onChange={handleChange}
                  id="list-radio-license"
                  type="radio"
                  value="quantity"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-license"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  quantity
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg border-b border-gray-200 ">
              <div className="flex items-center pl-3">
                <input
                  onChange={handleChange}
                  id="list-radio-distance"
                  type="radio"
                  value="distance"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="list-radio-distance"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  distance
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
