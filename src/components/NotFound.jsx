import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex h-210 md:h-180 flex-col justify-center items-center text-center !p-2 !-mt-16">
      <h1 className="text-4xl font-bold !m-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">It appears that the page you are looking for does not exist.</p>
      <Link to="/" className="text-yellow-400 underline !m-4">Go back to main page</Link>
    </div>
  )
}
