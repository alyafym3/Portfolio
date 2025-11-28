import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import './hero.css'
import useIntersection from '../utils/useIntersection'

const rotating = ['Full Stack Developer','React Enthusiast','Problem Solver']

export default function Hero({ forwardedRef }){
  const ref = useRef(null)
  useEffect(()=>{ if(forwardedRef) forwardedRef(ref.current) }, [forwardedRef])
  useIntersection(ref)

  // simple rotating text
  const rRef = useRef(0)
  const [rot, setRot] = React.useState(rotating[0])
  useEffect(()=>{
    const t = setInterval(()=>{ rRef.current = (rRef.current+1) % rotating.length; setRot(rotating[rRef.current]) }, 2200)
    return ()=> clearInterval(t)
  },[])

  return (
    <section id="home" ref={ref} className="section hero">
      <div className="bg-accent p1" aria-hidden></div>
      <div className="bg-accent p2" aria-hidden></div>
      <div className="hero-left fade-up">
        <p className="muted">Hi, I'm</p>
        <h1 style={{fontSize:36, margin:'6px 0'}}>Mohammed Nasser Mohammed Alyafeai</h1>
        <h3 style={{color:'var(--primary)', margin:'6px 0'}}>{rot}</h3>
        <p className="muted" style={{maxWidth:640}}>I'm a passionate full stack developer focused on building scalable web applications and clean, user-centric interfaces. I enjoy turning complex problems into simple, beautiful solutions.</p>

        <div style={{marginTop:18, display:'flex', gap:12}}>
          <button className="btn" onClick={()=>document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>View Projects</button>
          <a className="btn btn--ghost" href="/dummy-cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>

        <div style={{marginTop:18, display:'flex', gap:12, alignItems:'center'}}>
          <a href="#" aria-label="GitHub" className="muted"><FaGithub /></a>
          <a href="#" aria-label="LinkedIn" className="muted"><FaLinkedin /></a>
          <a href="mailto:email@example.com" aria-label="Email" className="muted"><FaEnvelope /></a>
        </div>
      </div>

      <div className="hero-right fade-up">
        <div className="avatar">
          <img src="/profile.png" alt="Mohammed Nasser Mohammed Alyafeai" style={{width:220,height:220,borderRadius:18,objectFit:'cover'}} />
        </div>
      </div>
    </section>
  )
}
