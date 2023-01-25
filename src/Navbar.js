import React from "react";

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container pt-4 ">
        <a
          class="navbar-brand"
          href="#"
          className="fw-bold text-decoration-none text-black fs-4"
        >
          <img
            src="logo.png"
            alt="Logo Ilang"
            width="30"
            height="30"
            className="d-inline-block align-text-top mr-5"
          />
          Info Zodiak
        </a>
        <form class="d-flex pb-sm-2" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">
            Support
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
