import { useEffect, useRef, useState } from 'react'

export function useScrollSpy(ids, offset = 100) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      }
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (bottom) current = ids[ids.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return active
}