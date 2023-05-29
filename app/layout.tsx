import './globals.css'

export const metadata = {
  title: 'Numéros Verts',
  description: '1er site des numéros verts français !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
