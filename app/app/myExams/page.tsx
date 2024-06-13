"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

const MyExams = () => {
  return (
    <div className="min-h-screen w-full p-7">
      <Breadcrumbs>
        <BreadcrumbItem>App</BreadcrumbItem>
        <BreadcrumbItem>My Exams</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-12"></div>
    </div>
  );
};

export default MyExams;
