import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import './navbar.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar({ theme, setTheme, sections }){
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ setActive(e.target.id) }
      })
    }, { threshold: 0.5 })
    Object.values(sections.current).forEach(sec=>{ if(sec) obs.observe(sec) })
    return ()=> obs.disconnect()
  }, [sections])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if(!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="navbar">
      <div className="inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{fontWeight:800, fontSize:18, cursor:'pointer'}} onClick={()=>scrollTo('home')}>Mohammed N.</div>
        </div>

        <div className="nav-links">
          <div className="desktop-links" style={{display:'flex',gap:8}}>
            {NAV_ITEMS.map(item=> (
              <button key={item.id} className={`nav-link ${active===item.id? 'active':''}`} onClick={()=>scrollTo(item.id)}>{item.label}</button>
            ))}
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="nav-hamburger" onClick={()=>setMobileOpen(s=>!s)} aria-label="open menu">☰</button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{position:'fixed',inset:0,background:'rgba(2,6,23,0.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:60}}>
          <div style={{background:'var(--card)', padding:24, borderRadius:12, width:'90%', maxWidth:360}}>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {NAV_ITEMS.map(item=> (
                <button key={item.id} className={`nav-link`} onClick={()=>scrollTo(item.id)}>{item.label}</button>
              ))}
              <button className="btn btn--ghost" onClick={()=>setMobileOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
