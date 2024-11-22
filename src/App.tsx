import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import logo from './assets/react.svg';

import viteLogo from '/vite.svg';
import { ModeToggle } from './components/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Welcome />
    </ThemeProvider>
  );
}

function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <ModeToggle />
      </div>
      <div className="text-center">
        <header className="h-svh flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row items-center justify-center gap-4">
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img
                  src={viteLogo}
                  className="h-16 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
                  alt="Vite logo"
                />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img
                  src={logo}
                  className="h-16 motion-safe:animate-[spin_20s_linear_infinite] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
                  alt="React logo"
                />
              </a>
            </div>
            <h1 className="text-2xl font-semibold">Vite + React</h1>
            <p className="text-sm text-muted-foreground">
              Edit{' '}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                src/App.tsx
              </code>{' '}
              and save to reload.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Button asChild>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </Button>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
