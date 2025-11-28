import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle({ theme, setTheme }){
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <button onClick={toggle} className="btn btn--ghost" aria-label="Toggle theme">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
