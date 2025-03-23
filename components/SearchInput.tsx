"use client"
import { useRouter } from "next/navigation"
import React from "react"
import Form from "next/form"
import { Search } from "lucide-react"

const SearchInput = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/search?query=${searchQuery}`)
  }

  return (
    <Form action="/search" onSubmit={handleSubmit} className="relative">
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
      <input
        name="query"
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </Form>
  )
}

export default SearchInput
