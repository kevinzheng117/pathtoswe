"use client";
import React from "react";
import Hide from "./hide_button";
import Save from "./save_button";
import Apply from "./apply_button";
import { useState } from "react";

interface Props {
  company: string;
  role: string;
  location: string;
  datePosted: string;
  applyLink: string;
}

const Row = ({ company, role, location, datePosted, applyLink }: Props) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <tr className={!isHidden ? "hidden" : "display"}>
      <td>{company}</td>
      <td>{role}</td>
      <td>{location}</td>
      <td className="pr-0">{datePosted}</td>
      <td className="flex content-around gap-7 justify-center px-0">
        <Save
          rowHidden={() => {
            setHidden(!isHidden);
          }}
        />
        <Hide
          rowHidden={() => {
            setHidden(!isHidden);
          }}
        />
      </td>
      <td className="pl-0">
        <Apply href={applyLink}></Apply>
      </td>
    </tr>
  );
};

export default Row;
