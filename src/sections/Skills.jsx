import React, { useRef, useEffect, useState } from 'react'
import SKILLS from '../data/skills'
import useIntersection from '../utils/useIntersection'
import SectionTitle from '../components/SectionTitle'

function SkillBadge({ s }){
  return (
    <div className="card" style={{display:'flex',flexDirection:'column',gap:8}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <strong>{s.name}</strong>
        <span className="muted">{s.level}%</span>
      </div>
      <div style={{height:8,background:'rgba(0,0,0,0.06)',borderRadius:6,overflow:'hidden'}}>
        <div style={{width:`${s.level}%`,height:'100%',background:'var(--primary)'}} />
      </div>
    </div>
  )
}

export default function Skills({ forwardedRef }){
  const ref = useRef(null)
  useEffect(()=>{ if(forwardedRef) forwardedRef(ref.current) }, [forwardedRef])
  useIntersection(ref)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...SKILLS.map(s=>s.category)]
  const list = filter === 'All' ? SKILLS.flatMap(s=>s.items) : (SKILLS.find(s=>s.category===filter)?.items || [])

  return (
    <section id="skills" ref={ref} className="section">
      <SectionTitle subtitle="Grouped skills with level indicators">Skills</SectionTitle>

      <div className="fade-up" style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:6}}>
        {categories.map(c=> <button key={c} className="btn btn--ghost" onClick={()=>setFilter(c)}>{c}</button>)}
      </div>

      <div style={{marginTop:18}} className="grid grid-3">
        {list.map(s => <SkillBadge key={s.name} s={s} />)}
      </div>
    </section>
  )
}
