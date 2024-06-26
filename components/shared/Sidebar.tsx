"use client";
import Link from "next/link";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { TbCoin } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="h-full w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-teal-500 text-white">
      <div>
        <div className="flex items-center px-4 h-14 border-b-2 font-semibold">
          <div>ExamHub</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-semibold tracking-wide text-white">
                  For you
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/app/myExams"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <IoNewspaperOutline className="font-bold" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  My Exams
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/app/myAnswers"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <RiQuestionAnswerLine className="font-bold" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  My Answers
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/myGrades"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <BsFileEarmarkBarGraph className="font-bold" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  My Grades
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/billing"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <TbCoin className="font-bold" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Billing
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm tracking-wide text-white font-semibold">
                  Market Place
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/dataBanks"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaDatabase className="font-bold" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Data Banks
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/exams"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-teal-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <IoNewspaperOutline className="font-bold" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Exams
                </span>
              </Link>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-semibold tracking-wide text-white">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/profile"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/signout"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white text-white hover:text-gray-800 border-l-4 border-transparent hover:border-teal-900 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
