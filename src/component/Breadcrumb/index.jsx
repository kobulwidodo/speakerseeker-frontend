import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ children }) => {
  return (
    <div className="bg-[#E9F2FF]">
      <div className="max-w-7xl mx-auto py-7 px-4">
        <nav>
          <ol className="list-reset flex flex-row">{children}</ol>
        </nav>
      </div>
    </div>
  );
};

const Item = ({ label, link }) => (
  <li className="text-lg hover:text-blue-900">
    <Link to={link ?? "#"}>{label}</Link>
  </li>
);
const Divider = () => <li className="mx-5 text-lg">/</li>;

Breadcrumb.Item = Item;
Breadcrumb.Divider = Divider;
export default Breadcrumb;
