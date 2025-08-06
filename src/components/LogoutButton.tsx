"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { logoutAction } from "@/actions/users";
type Props = {};

function LogoutButton({}: Props) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true); // Simulate logout action
    const errorMessage = await logoutAction();
    if (!errorMessage) {
      router.push("/?toastType=logout");
    } else {
      toast("Logout failed", {
        description: "Logout failed!!!",
      });
    }

    setLoading(false);
  };
  return (
    <Button
      className="w-24"
      variant={"outline"}
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogoutButton;
