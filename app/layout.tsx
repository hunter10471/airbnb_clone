import ToasterProvider from './Providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/Modals/LoginModal';
import RegisterModal from './components/Modals/RegisterModal';
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({subsets:['latin']});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone By Rafay',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToasterProvider/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
