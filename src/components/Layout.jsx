import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <NavBar />
      {children}
    </div>
  )
}
