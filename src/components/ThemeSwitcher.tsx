"use client"
import { SunIcon } from "@heroicons/react/24/outline"
import themes from "@/themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { changeTheme } from "@/utils";
import { setTheme } from "@/app/actions";

const ThemeSwitcher = ({ className }: { className?: string; }) => {
  const [currentTheme, setCurrentTheme] = useState<string>("");
  useEffect(() => {
    setCurrentTheme(document.documentElement.dataset.theme ?? "Mono");
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <SunIcon className="w-5 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        <DropdownMenuLabel>Switch Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object
          .keys(themes)
          .sort((a, b) => a.localeCompare(b))
          .map((themeName, index) => {
            return <DropdownMenuItem
              key={`theme-dropdown-menu-item-${index}`}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault();
                setTheme(themeName);
                changeTheme(themeName);
                setCurrentTheme(themeName);
              }}
              className={"cursor-pointer" + (themeName === currentTheme ? " underline decoration-accent decoration-2" : "")}>
              <div className="flex items-center justify-between gap-2 w-full">
                <div>
                  {themeName}
                </div>

                <div className="flex items-center gap-2">
                  <span
                    style={{
                      backgroundColor: `${themes[themeName]['--primary']}`
                    }}
                    className="block h-2 w-2 rounded-full" />
                  <span
                    style={{
                      backgroundColor: `${themes[themeName]['--secondary']}`
                    }}
                    className="block h-2 w-2 rounded-full" />
                  <span
                    style={{
                      backgroundColor: `${themes[themeName]['--accent']}`
                    }}
                    className="block h-2 w-2 rounded-full" />
                  <span
                    style={{
                      backgroundColor: `${themes[themeName]['--foreground']}`
                    }}
                    className="block h-2 w-2 rounded-full" />
                </div>
              </div>
            </DropdownMenuItem>
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSwitcher
