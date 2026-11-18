"use client"
import Link from "next/link"

export default function BugDemos() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Bug Fix Examples</h1>
      <p className="mb-8 text-gray-600">
        This page demonstrates common React/Next.js bugs and their fixes.
        Navigate to <code className="bg-gray-100 px-1 rounded">/fixed</code> to see the corrected versions.
      </p>
      
      <div className="space-y-6">
        <BugCard 
          title="Infinite Loop" 
          bug="useEffect sets state without proper dependency array" 
          fix="Use setInterval with cleanup, or add correct dependencies" 
          status="bug" 
        />
        <BugCard 
          title="TypeScript Errors" 
          bug="Accessing non-existent properties, invalid syntax" 
          fix="Add proper interfaces, validate API responses" 
          status="bug" 
        />
        <BugCard 
          title="API Timeout / No Retry" 
          bug="fetch() with no timeout, no retry logic" 
          fix="AbortController + exponential backoff retry" 
          status="bug" 
        />
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <Link 
          href="/fixed" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          View Fixed Versions →
        </Link>
      </div>
    </div>
  )
}

function BugCard({title, bug, fix, status}: {title: string, bug: string, fix: string, status: "bug" | "fixed"}) {
  return (
    <div className={`border rounded-lg p-4 ${status === "fixed" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${status === "fixed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {status.toUpperCase()}
        </span>
      </div>
      <p className="text-red-600 mt-1">Bug: {bug}</p>
      <p className="text-green-600">Fix: {fix}</p>
    </div>
  )
}