import React, { useEffect, useRef } from 'react'
import useIntersection from '../utils/useIntersection'
import SectionTitle from '../components/SectionTitle'


export default function About({ forwardedRef }){
  const ref = useRef(null)
  useEffect(()=>{ if(forwardedRef) forwardedRef(ref.current) }, [forwardedRef])
  useIntersection(ref)

  return (
    <section id="about" ref={ref} className="section">
      <SectionTitle subtitle="A short background and what I build">About Me</SectionTitle>

      <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:18,marginTop:18}}>
        <div className="fade-up">
          <p className="muted">I'm Mohammed, a full stack developer who loves building end-to-end web solutions. From designing responsive UIs in React to crafting secure APIs and working with databases, I enjoy being involved in every layer of the stack. I'm always learning, experimenting, and refining my craft.</p>
          <ul style={{marginTop:12}}>
            <li>💻 Full stack web development (frontend + backend)</li>
            <li>🌐 Experience with RESTful APIs and authentication</li>
            <li>📦 Familiar with deployment and CI/CD basics</li>
          </ul>
        </div>

        <aside className="card fade-up">
          <h4 style={{marginTop:0}}>Highlights</h4>
          <div style={{marginTop:8}}>
            <strong>Frontend</strong>
            <p className="muted">React, TypeScript, Styled Components</p>
            <strong>Backend</strong>
            <p className="muted">Node.js, Express, REST APIs, JWT</p>
            <strong>Tools</strong>
            <p className="muted">Git, Docker, Postman, CI/CD</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
