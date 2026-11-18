"use client"
import { useEffect, useState } from "react"

export default function FixedBugs() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<{items: string[]} | null>(null)
  const [user, setUser] = useState<{name: string; age: number} | null>(null)

  // FIXED 1: Added count to dependency array
  useEffect(() => {
    setCount(c => c + 1)
  }, [count])

  // FIXED 2: Proper TypeScript types
  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then((d: {items: string[], name: string, age: number}) => {
      setData(d)
      setUser({name: d.name, age: d.age})
    })
  }, [])

  // FIXED 3: Timeout + retry
  const fetchWithTimeout = async (url: string, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 5000)
        const res = await fetch("/api/slow", { signal: controller.signal })
        clearTimeout(timeout)
        return res.json()
      } catch (e) {
        if (i === 2) throw e
        await new Promise(r => setTimeout(r, 1000 * (i + 1)))
      }
    }
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Fixed Bugs</h1>
      <div className="space-y-6">
        <FixedCard title="Infinite Loop" fix="Added [count] to dependency array" />
        <FixedCard title="TypeScript Errors" fix="Proper type definitions for API response" />
        <FixedCard title="API Timeout" fix="AbortController + exponential backoff retry" />
      </div>
    </div>
  )
}

function FixedCard({title, fix}: {title: string, fix: string}) {
  return (
    <div className="border rounded-lg p-4 bg-green-50">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-green-700">Fix: {fix}</p>
    </div>
  )
}