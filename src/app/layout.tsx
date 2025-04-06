import { getLocale, getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'

export const dynamic = 'force-dynamic'

type Union = 'foo' | 'bar' | 'boo' | 'baz'
function f(value: Union) {}

export default async function RootLayout({ children }: { children: ReactNode }) {
	const locale = await getLocale()

	const t = await getTranslations()

	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	)
}
