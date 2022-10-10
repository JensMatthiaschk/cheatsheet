import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className="container mx-auto flex flex-wrap gap-6 justify-center">
      <NavBar />
      {children}
    </div>
  )
}
