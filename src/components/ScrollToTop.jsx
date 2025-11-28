import React, { useState, useEffect } from 'react'

export default function ScrollToTop(){
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const goTop = () => window.scrollTo({ top:0, behavior:'smooth' })

  if(!visible) return null
  return (
    <button onClick={goTop} style={{position:'fixed',right:20,bottom:24,zIndex:60,padding:12,borderRadius:12,boxShadow:'var(--shadow-md)',background:'var(--primary)',color:'var(--btn-text)',border:'none',cursor:'pointer'}}>↑</button>
  )
}
