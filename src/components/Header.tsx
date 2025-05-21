import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import LogOutButton from "./LogoutButton";
import DarkModeToggle from "./DarkModeToggle";
import { shadow } from "@/styles/utils";
import LogoutButton from "./LogoutButton";
import { Button } from "./ui/button";
export default function Header() {
  const isLogin = true;
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <SidebarTrigger className="absolute left-1 top-1" />
      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          className="rounded-full"
          alt="logo"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          GOAT <span>Notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {isLogin ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign up
              </Link>
            </Button>
            <Button>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}
