import { useEffect } from 'react'

const base = 'Olanrewaju Oredipe, Senior Product Designer'

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Olanrewaju Oredipe` : base
  }, [title])
}
