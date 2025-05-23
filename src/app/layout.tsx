import { getLocale, getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'

export const dynamic = 'force-dynamic'

type Union = 'foo' | 'bar' | 'boo' | 'baz'
function f(value: Union) {}

declare function myGetTranslations(): {
	<TargetKey extends Union>(key: TargetKey): string
	rich<TargetKey extends Union>(key: TargetKey): ReactNode
}

export default async function RootLayout({ children }: { children: ReactNode }) {
	const locale = await getLocale()

	const t = await getTranslations()
	const t2 = myGetTranslations()

	f('')
	t('')
	t2('')

	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	)
}
