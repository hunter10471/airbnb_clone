import ToasterProvider from './Providers/ToasterProvider';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({subsets:['latin']});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone By Rafay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider/>
        <RegisterModal/>
        <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
