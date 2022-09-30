import React, { useEffect, useState } from "react";
import DATA from "../DATA.json";
import axios from "axios";
import { ColumnDropdown } from "./ColumnDropdown";
import { FilterDropdown } from "./FilterDropdown";
import { FilterSearch } from "./FilterSearch";
export const SortTable = (props) => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");

  const [formData, setFormData] = useState({
    column: "",
    filterBy: "",
    filterSearch: "",
  });
  function sorting(colName) {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[colName] > b[colName] ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[colName] < b[colName] ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  }
  useEffect(() => {
    axios
      .get("https://expressjs-postgres-production-f4d0.up.railway.app/rent")
      .then((res) => setData(res.data));

    console.log(data);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("erere");
    axios
      .get("https://expressjs-postgres-production-f4d0.up.railway.app/search", {
        params: {
          ...formData,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="overflow-x-auto h-[450px] mx-auto max-w-[650px] mt-[100px]  shadow-md sm:rounded-lg">
        <FilterDropdown formData={formData} setFormData={setFormData} />
        <ColumnDropdown formData={formData} setFormData={setFormData} />
        <FilterSearch
          formData={formData}
          setData={setData}
          setFormData={setFormData}
        />

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                onClick={() => sorting("id")}
                scope="col"
                className="py-3 cursor-pointer px-6"
              >
                <div className="flex cursor-pointer items-center">
                  Id
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </span>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                date
              </th>
              <th
                onClick={() => sorting("title")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex cursor-pointer items-center">
                  title
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </span>
                </div>
              </th>
              <th
                onClick={() => sorting("quantity")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex cursor-pointer items-center">
                  quantity
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </span>
                </div>
              </th>
              <th
                onClick={() => sorting("distance")}
                scope="col"
                className="py-3 px-6"
              >
                <div className="flex cursor-pointer items-center">
                  distance
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </span>
                </div>
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {!data[0] && (
              <h3 className="mx-auto text-center mt-[120px] text-2xl font-medium">
                Loading...
              </h3>
            )}
            {data.map((obj, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6 text-right">{obj.id}</td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {obj.date.toString()}
                </th>
                <td className="py-4 px-6">{obj.title}</td>
                <td className="py-4 px-6">{obj.quantity}</td>
                <td className="py-4 px-6">{obj.distance}m</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};
