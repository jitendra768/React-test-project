import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

    const [user,setUsers] = useState([])
    console.log("🚀 ~ Users ~ user:", user)

    const getAllUsers = async()=>{
        await axios.get('https://fakestoreapi.com/users')
        .then((res)=>setUsers(res.data))
    }

    useEffect(()=>{
        getAllUsers();
    },[])
  return (
    <>
      <div className="m-6">
        <div class="w-full flex justify-between items-center  mb-3 mt-1 pl-3">
          <div>
          <Link to={'adduser'}>
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Add Users
            </button>
            </Link>
          </div>
          <div class="ml-3">
            <div class="w-full max-w-sm min-w-[200px] relative">
              <div class="relative">
                <input
                  class="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                  placeholder="Search for invoice..."
                />
                <button
                  class="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class="w-8 h-8 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table class="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th class="p-4 border-b border-slate-200 bg-slate-50">
                  <p class="text-sm font-normal leading-none text-slate-500">
                    Username
                  </p>
                </th>
                <th class="p-4 border-b border-slate-200 bg-slate-50">
                  <p class="text-sm font-normal leading-none text-slate-500">
                    Email
                  </p>
                </th>
                <th class="p-4 border-b border-slate-200 bg-slate-50">
                  <p class="text-sm font-normal leading-none text-slate-500">
                    Address
                  </p>
                </th>
                <th class="p-4 border-b border-slate-200 bg-slate-50">
                  <p class="text-sm font-normal leading-none text-slate-500">
                    phone
                  </p>
                </th>
                <th class="p-4 border-b border-slate-200 bg-slate-50">
                  <p class="text-sm font-normal leading-none text-slate-500">
                    Action
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
            {user.map((user)=>(
                <tr key={user.id} class="hover:bg-slate-50 border-b border-slate-200">
                <td class="p-4 py-5">
                  <p class="block font-semibold text-sm text-slate-800">
                    {user.username}
                  </p>
                </td>
                <td class="p-4 py-5">
                  <p class="text-sm text-slate-500"> {user.email}</p>
                </td>
                <td class="p-4 py-5">
                  <p class="text-sm text-slate-500"> {user.address.street}</p>
                </td>
                <td class="p-4 py-5">
                  <p class="text-sm text-slate-500"> {user.phone}</p>
                </td>
                <div>
                  <td class="p-4 py-5">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-width="2"
                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-width="2"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </td>
                  <td class="p-4 py-5">
                    <svg
                      class="w-6 h-6 text-gray-900 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </td>
                  <td class="p-4 py-5">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5v14m-6-8h6m-6 4h6m4.506-1.494L15.012 12m0 0 1.506-1.506M15.012 12l1.506 1.506M15.012 12l-1.506-1.506M20 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z"
                      />
                    </svg>
                  </td>
                </div>
              </tr>
            ))}
             
            </tbody>
          </table>

          <div class="flex justify-between items-center px-4 py-3">
            <div class="text-sm text-slate-500">
              Showing <b>1-5</b> of 45
            </div>
            <div class="flex space-x-1">
              <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                Prev
              </button>
              <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                1
              </button>
              <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                2
              </button>
              <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                3
              </button>
              <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
