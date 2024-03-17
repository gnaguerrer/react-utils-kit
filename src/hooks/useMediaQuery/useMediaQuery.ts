import { useEffect, useState } from 'react'

export const defaultBreakpoints = {
	sm: '(min-width: 640px)',
	md: '(min-width: 768px)',
	lg: '(min-width: 1024px)',
	xl: '(min-width: 1280px)',
	'2xl': '(min-width: 1536px)'
}

export const useMediaQuery = (mediaQuery: string): boolean => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQuery)
		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches)
		}
		setMatches(mediaQueryList.matches)

		mediaQueryList.addEventListener('change', handleChange)
		return () => {
			mediaQueryList.removeEventListener('change', handleChange)
		}
	}, [mediaQuery])

	return matches
}
