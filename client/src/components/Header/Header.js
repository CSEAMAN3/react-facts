import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/">
          <h1>This is the header</h1>
        </Link>
      </div>
    </header>
  );
}
