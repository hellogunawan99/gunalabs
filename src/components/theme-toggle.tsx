"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-20 items-center rounded-full p-1 transition-colors duration-300",
        theme === "light" ? "bg-slate-200" : "bg-slate-700"
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full shadow-md",
          theme === "light" ? "bg-white" : "bg-slate-800"
        )}
        animate={{ x: theme === "light" ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4 text-amber-500" />
          ) : (
            <Moon className="h-4 w-4 text-blue-400" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}
