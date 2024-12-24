import { useEffect, useState } from "react";
import { IoIosCloudDone } from "react-icons/io";
import { Resource_data_int } from "../../types/Resource";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInt from "../../helper/ApiInstance";
import ViewResource from "./ViewResource";

const Resource = () => {
  const [userEntries, setUserEntries] = useState<Resource_data_int>({
    category: "All",
    resourceLink: "",
  });

  const [mount, setMount] = useState(false);

  // form submit handler
  const handelResourceFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log("Form data is :- ", userEntries);

    try {
      // check the link is valid or not
      const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
      if (!regex.test(userEntries.resourceLink)) {
        toast.error("Oho!!....Invalid Link");
        return;
      }

      const response = await axiosInt.post(
        "/resource",
        {
          ...userEntries,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        }
      );

      console.log("Response is ", response);
      toast.success("Successfully Added Resource");
      setUserEntries({
        category: "All",
        resourceLink: "",
      });
      setMount((prev) => !prev);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Sorry!!!Error Occured");
      }
    }
  };

  // get resource data
  return (
    <div className="w-full h-auto">
      <form className=" w-[94%]  mx-auto" onSubmit={handelResourceFormSubmit}>
        {/* form details container */}
        <div className="flex w-full h-auto ">
          {/* select category button and list */}
          <div className="w-fit ">
            <select
              id="dropdown-button"
              name="category"
              value={userEntries.category}
              data-dropdown-toggle="dropdown"
              className="h-[42px] flex z-10  items-center  text-sm font-medium text-center text-gray-900 bg-gray-100  outline-none border-2 rounded-s-lg hover:bg-gray-20 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 px-2"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const { name, value } = e.target;
                setUserEntries((prev) => ({ ...prev, [name]: value }));
              }}
            >
              {/* default option, render else using backend data */}
              <option value="All">All</option>
              <option value="Food">Food</option>
            </select>
          </div>

          {/* input and submit button */}
          <div className="relative w-full">
            {/* search input */}
            <input
              type="search"
              id="search-dropdown"
              name="resourceLink"
              value={userEntries.resourceLink}
              className="h-[42px] block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300  dark:bg-gray-700 dark:border-s-gray-700 border-none outline-none dark:placeholder-gray-400 dark:text-white"
              placeholder="Copy & Paset you link here..."
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setUserEntries((prev) => ({ ...prev, [name]: value }));
              }}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4"
            >
              <span className="text-2xl ">
                <IoIosCloudDone />
              </span>
            </button>
          </div>
        </div>
      </form>
      {/* view resource */}
      <div className="w-[94%] h-auto mx-auto mt-8">
        <ViewResource mountState={mount} />
      </div>
    </div>
  );
};

export default Resource;
