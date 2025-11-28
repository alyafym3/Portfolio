import React from 'react'
import SOCIALS from '../data/socials'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <div>© {year} Mohammed Nasser Mohammed Alyafeai. All rights reserved.</div>
          <div style={{display:'flex',gap:12}}>
            {SOCIALS.map(s => (
              <a key={s.name} className="muted" href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
