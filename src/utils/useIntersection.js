import { useEffect } from 'react'

export default function useIntersection(ref, options = { threshold: 0.12 }){
  useEffect(()=>{
    if(!ref) return
    const root = ref.current || ref
    if(!root) return
    const nodes = root.querySelectorAll ? root.querySelectorAll('.fade-up') : []
    const targets = nodes.length ? Array.from(nodes) : [root]
    const obs = new IntersectionObserver((entries, o)=>{
      entries.forEach(e => {
        if(e.isIntersecting){ e.target.classList.add('in-view'); o.unobserve(e.target) }
      })
    }, options)
    targets.forEach(t => obs.observe(t))
    return ()=> obs.disconnect()
  }, [ref, options])
}
