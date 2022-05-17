import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="inline-flex p-2 border">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/play">
            <a>Play</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
