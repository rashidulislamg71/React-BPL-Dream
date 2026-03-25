import React from "react";

function Links({ path, name }) {
  return (
    <div>
      <li className="hover:text-orange-400">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
}

export default Links;
