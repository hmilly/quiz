import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/get-started">
            <a>Get Started</a>
          </Link>
        </li>
        <li>
          <Link href="/overview">
            <a>Overview</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
