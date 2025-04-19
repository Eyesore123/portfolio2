import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
