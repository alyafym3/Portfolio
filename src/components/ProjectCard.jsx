import React from 'react'

export default function ProjectCard({ p }){
  return (
    <article className="card project-card fade-up">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{margin:0}}>{p.name}</h3>
        <div style={{display:'flex',gap:8}}>
          <a className="muted" href={p.code} target="_blank" rel="noreferrer">Code</a>
          <a className="muted" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
        </div>
      </div>

      <p className="muted" style={{marginTop:8}}>{p.description}</p>

      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>
        {p.tech.map(t=> <span key={t} style={{fontSize:12,background:'rgba(0,0,0,0.04)',padding:'6px 8px',borderRadius:8}}>{t}</span>)}
      </div>

      <ul style={{marginTop:12}}>
        {p.features.map((f, idx)=> <li key={idx} className="muted">{f}</li>)}
      </ul>
    </article>
  )
}
