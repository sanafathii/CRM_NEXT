import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM NEXT</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>

      <footer className="footer">create by sanaFathi - project code</footer>
    </>
  );
}

export default Layout;
