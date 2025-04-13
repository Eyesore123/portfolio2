import React from 'react'
import '../styles/styles.css'

export default function Footer() {
  return (
    <div>
        <footer className="footer">
          <small className="orange">Copyright &copy; {new Date().getFullYear()} Joni Putkinen</small>
        </footer>
    </div>
  )
}
