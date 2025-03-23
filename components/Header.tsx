import { Button } from "@/components/ui/button"
import { DarkModeToggle } from "./DarkModeToggle"
import Link from "next/link"
import { BookOpen, Search } from "lucide-react"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import SearchInput from "./SearchInput"

const Header = () => {
  return (
    <header className="sticky top-0 z-50  border-b border-border bg-background/80 ">
      {/* Respoinsive Container */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90"
            >
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                VidyaPath
              </span>
            </Link>
            <SearchInput />
          </div>
          {/* Right */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <DarkModeToggle />
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant={"outline"}>Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
