"use client";
import React, { useState } from "react";
import Table from "./table";
import Modal from "@/app/ui/modal";
import FilterModal from "./filter_modal";
import { FunnelIcon } from "@heroicons/react/24/outline";

const SearchBarAndTable = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex pb-4">
        <label className="input input-bordered flex items-center gap-2 w-[40%]">
          <input
            type="text"
            className="grow"
            placeholder="Search Company"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <Modal
          btnClassName="btn btn-ghost ml-2 bg-concrete-gray"
          btnContent={
            <>
              <FunnelIcon className="h-6 w-6" /> Filter
            </>
          }
        >
          <FilterModal />
        </Modal>
      </div>
      <Table search={search} />
    </>
  );
};

export default SearchBarAndTable;
