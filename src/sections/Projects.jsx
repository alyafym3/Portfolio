import React, { useRef, useEffect } from 'react'
import PROJECTS from '../data/projects'
import useIntersection from '../utils/useIntersection'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'

export default function Projects({ forwardedRef }){
  const ref = useRef(null)
  useEffect(()=>{ if(forwardedRef) forwardedRef(ref.current) }, [forwardedRef])
  useIntersection(ref)

  return (
    <section id="projects" ref={ref} className="section">
      <SectionTitle subtitle="Selected full-stack projects and showcases.">Projects</SectionTitle>

      <div className="grid grid-3" style={{marginTop:16}}>
        {PROJECTS.map(p=> <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
