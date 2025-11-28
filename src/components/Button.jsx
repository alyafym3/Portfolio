import React from 'react'

export default function Button({ children, variant='primary', onClick, href, className='', ...props }){
  const base = 'btn'
  const cls = `${base} ${variant==='ghost' ? 'btn--ghost':''} ${className}`
  if(href) return <a className={cls} href={href} {...props}>{children}</a>
  return <button className={cls} onClick={onClick} {...props}>{children}</button>
}
