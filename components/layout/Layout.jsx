import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM NEXT</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>

      <footer className="footer">
        <a href="https://github.com/sanafathii" target="_blank">
          {" "}
          create by sanaFathi - project code
        </a>
      </footer>
    </>
  );
}

export default Layout;
