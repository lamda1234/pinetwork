import React from "react";

export default function SearchBox(props) {
  return (
    <div>
      <input
        type="search"
        className="searchBar"
        placeholder="Search porn videos & porn movies..."
        onChange={props.searchHandeler}
      />
    </div>
  );
}
