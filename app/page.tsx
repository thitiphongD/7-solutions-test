import React from "react";
import { SeparatorLine } from "./components/Seperator";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-xl font-light tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        <span className="block">Auto Delete Todo List</span>
      </h1>
      <SeparatorLine />
      <ToDoList />
    </div>
  );
}
