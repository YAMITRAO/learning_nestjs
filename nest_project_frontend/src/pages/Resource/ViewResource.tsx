import axios from "axios";
import axiosInt from "../../helper/ApiInstance";
import { ApiResponse } from "../../types/ApiTypes";
import {
  Resource_response_user_int,
  ViewResources_int,
} from "../../types/Resource";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
// start :- normal and filled
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

// important :- normal and filled
import { MdLabelImportantOutline } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";

// delete icon
import { MdDelete } from "react-icons/md";
// watch later icons: normal and filled
import { MdOutlineWatchLater } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";

import UserContext from "../../context/UserContext";

const ViewResource: React.FC<ViewResources_int> = ({ mountState }) => {
  // user details
  const { state } = useContext(UserContext);
  const [resourceData, setResourceData] =
    useState<Resource_response_user_int[]>();
  // filtered Data
  const [resourceFilterData, setResourceFilterData] =
    useState<Resource_response_user_int[]>();
  const getResourceData = async () => {
    try {
      const response = await axiosInt.get<
        ApiResponse<Resource_response_user_int[]>
      >("/resource", {
        headers: {
          Authorization: `Bearer ${localStorage?.getItem("token")}`,
        },
      });
      console.log("Response is ", response.data.data);
      setResourceData(response.data.data);
      setResourceFilterData(response.data.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  // resource delete handler
  const resourceDeleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log("Delete button is clicked", e.currentTarget.value);
    const deleteDocId = e.currentTarget.value;
    try {
      await axiosInt.delete(`/resource/${deleteDocId}`, {
        headers: {
          Authorization: `Bearer ${localStorage?.getItem("token")}`,
        },
      });
      toast.success("Deleted Successfully");
      getResourceData();
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "System error");
      }
    }
  };

  // importent button select or remove handler
  const handelImportant = async (id: string, status: boolean) => {
    try {
      console.log("Id is", id, status);
      await axiosInt.put(
        `/resource/important/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        }
      );

      getResourceData();
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  // handel fvrt as star
  const handelFvrt = async (id: string, status: boolean) => {
    try {
      console.log("Id is", id, status);
      await axiosInt.put(
        `/resource/favourite/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        }
      );

      getResourceData();
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  // handel watchLater
  const handelWatchLater = async (id: string, status: boolean) => {
    try {
      console.log("Id is", id, status);
      await axiosInt.put(
        `/resource/watchlater/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        }
      );

      getResourceData();
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  // select filter data
  const selectFilterDataHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.currentTarget.value;
    console.log("Filter data is", filterValue);

    let allResourceData = resourceData;
    setResourceFilterData(
      allResourceData?.filter((val) => {
        if (filterValue === "important")
          return val.isResourceMustWatch === true;
        else if (filterValue === "watchlater")
          return val.isResourceWatchLater === true;
        else if (filterValue === "favourite")
          return val.isResourceUserFvrt === true;
        else return true;
      })
    );
  };

  useEffect(() => {
    getResourceData();
  }, [mountState]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
      {/* top filter and search div  */}
      {true && (
        <div className="flex flex-column sm:flex-row  space-y-4 sm:space-y-0 items-center justify-between pb-4  ">
          <div className="w-fit h-full ">
            <div
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700  "
            >
              <span className="mr-1 text-lg text-slate-300">
                <MdOutlineCategory />
              </span>

              <select
                className="bg-transparent text-slate-400 border-none outline-none "
                onChange={selectFilterDataHandler}
              >
                <option value="all">All</option>
                <option value="important">Important</option>
                <option value="favourite">Favourite</option>
                <option value="watchlater">Watch Later</option>
              </select>
            </div>
            {/* Dropdown menu */}
            <div
              id="dropdownRadio"
              className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              style={{
                position: "absolute",
                inset: "auto auto 0px 0px",
                margin: "0px",
                transform: "translate3d(522.5px, 3847.5px, 0px)",
              }}
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value=""
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last day
                    </label>
                  </div>
                </li>
                {/* Repeat similar list items for other radio buttons */}
              </ul>
            </div>
          </div>

          <div className="relative ">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <span className="text-xl">
                <IoSearchSharp />
              </span>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
      )}

      {/* content */}
      <table className="w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              Sr.
            </th>
            <th scope="col" className="px-6 py-3">
              Resource Link
            </th>
            {/* only for admin use */}
            {state.accessType === "admin" && (
              <th scope="col" className="px-6 py-3">
                createdBy
              </th>
            )}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {resourceFilterData &&
            resourceFilterData.map((val, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={val._id}
                  style={{
                    background: `${
                      val.createdBy.userName !== state.userName &&
                      state.accessType === "admin"
                        ? "#073b4c"
                        : ""
                    }`,
                  }}
                >
                  <td className="w-4 p-4">{index + 1}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <a
                      href={val.resourceLink}
                      target="_blank"
                      className="text-sky-500 hover:underline"
                    >
                      Click To Open
                    </a>
                  </td>
                  {/* only for admin */}
                  {state.accessType == "admin" && (
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-300 capitalize"
                    >
                      <span
                        style={{
                          color: `${
                            val.createdBy.userName === state.userName
                              ? "#ff6d00"
                              : ""
                          }`,
                        }}
                      >
                        {val.createdBy.userName === state.userName
                          ? "Self"
                          : val.createdBy.userName}
                      </span>
                    </td>
                  )}
                  {/* action buttons */}
                  <td className="px-6 py-4 flex justify-evenly items-center text-xl">
                    {/* important  */}
                    <span className="text-[24px] cursor-pointer hover:scale-110 transition-all">
                      {!val.isResourceMustWatch ? (
                        <button
                          value={val._id}
                          className="dark:text-slate-400 text-slate-800"
                          onClick={() => handelImportant(val._id, true)}
                        >
                          <MdLabelImportantOutline />
                        </button>
                      ) : (
                        <button
                          value={val._id}
                          className="text-yellow-600 "
                          onClick={() => handelImportant(val._id, false)}
                        >
                          <MdLabelImportant />
                        </button>
                      )}
                    </span>
                    {/* fvrt start */}
                    <span className=" cursor-pointer hover:scale-110 transition-all">
                      {!val.isResourceUserFvrt ? (
                        <span
                          className="dark:text-slate-400 text-slate-800"
                          onClick={() => handelFvrt(val._id, true)}
                        >
                          <FaRegStar />
                        </span>
                      ) : (
                        <span
                          className="text-green-700 "
                          onClick={() => handelFvrt(val._id, false)}
                        >
                          <FaStar />
                        </span>
                      )}
                    </span>

                    {/* delete button icon */}
                    {val.createdBy._id == state.userId ||
                    state.accessType == "user" ? (
                      <button
                        value={val._id}
                        className="text-red-700 cursor-pointer hover:scale-125 transition-all"
                        onClick={resourceDeleteHandler}
                      >
                        <MdDelete />
                      </button>
                    ) : (
                      // watch later icons as button
                      <span className=" cursor-pointer hover:scale-110 transition-all text-[22px]">
                        {!val.isResourceWatchLater ? (
                          <span
                            className="dark:text-slate-400 text-slate-800"
                            onClick={() => handelWatchLater(val._id, true)}
                          >
                            <MdOutlineWatchLater />
                          </span>
                        ) : (
                          <span
                            className="text-[#00a5cf] "
                            onClick={() => handelWatchLater(val._id, false)}
                          >
                            <MdWatchLater />
                          </span>
                        )}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}

          {/* Repeat similar rows for other products */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewResource;
