import React from 'react'

export default function SectionTitle({ children, subtitle }){
  return (
    <div style={{marginBottom:12}}>
      <h2 style={{fontSize:28, margin:0, letterSpacing:'-0.4px'}}>{children}</h2>
      {subtitle && <p className="muted" style={{marginTop:6}}>{subtitle}</p>}
    </div>
  )
}
