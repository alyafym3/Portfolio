import React, { useRef, useEffect } from 'react'
import EXPERIENCE from '../data/experience'
import useIntersection from '../utils/useIntersection'
import SectionTitle from '../components/SectionTitle'

export default function Experience({ forwardedRef }){
  const ref = useRef(null)
  useEffect(()=>{ if(forwardedRef) forwardedRef(ref.current) }, [forwardedRef])
  useIntersection(ref)

  return (
    <section id="experience" ref={ref} className="section">
      <SectionTitle subtitle="Where I've learned and built">Experience</SectionTitle>

      <div style={{marginTop:16}}>
        {EXPERIENCE.map((e,i)=> (
          <div key={i} className="card fade-up" style={{marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <strong>{e.title}</strong>
              <span className="muted">{e.period}</span>
            </div>
            <ul>
              {e.details.map((d,idx)=> <li key={idx} className="muted">{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
