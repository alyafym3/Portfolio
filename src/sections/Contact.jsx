import React, { useRef, useEffect, useState } from 'react'
import useIntersection from '../utils/useIntersection'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

export default function Contact({ forwardedRef }){
  const ref = useRef(null)
  useEffect(()=>{ if(forwardedRef) forwardedRef(ref.current) }, [forwardedRef])
  useIntersection(ref)
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e)=>{
    e.preventDefault()
    setStatus('loading')
    setTimeout(()=> setStatus('success'), 800)
  }

  return (
    <section id="contact" ref={ref} className="section">
      <SectionTitle subtitle="Let's build something together">Contact</SectionTitle>

      <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:18,marginTop:18}}>
        <form onSubmit={handleSubmit} className="card fade-up">
          <label>Name</label>
          <input required name="name" style={{padding:8,marginTop:6,borderRadius:8,border:'1px solid rgba(0,0,0,0.06)'}} />
          <label style={{marginTop:8}}>Email</label>
          <input required name="email" type="email" style={{padding:8,marginTop:6,borderRadius:8,border:'1px solid rgba(0,0,0,0.06)'}} />
          <label style={{marginTop:8}}>Message</label>
          <textarea required name="message" rows={6} style={{padding:8,marginTop:6,borderRadius:8,border:'1px solid rgba(0,0,0,0.06)'}} />
          <div style={{marginTop:12}}>
            <Button>{status==='loading' ? 'Sending...' : 'Send Message'}</Button>
            {status==='success' && <span style={{marginLeft:12,color:'var(--primary)'}}>Message sent (demo)</span>}
          </div>
        </form>

        <div className="card fade-up">
          <h4>Contact</h4>
          <p className="muted">Email: email@example.com</p>
          <p className="muted">GitHub: github.com/USERNAME</p>
          <p className="muted">LinkedIn: linkedin.com/in/USERNAME</p>
        </div>
      </div>
    </section>
  )
}
