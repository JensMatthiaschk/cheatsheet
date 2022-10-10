import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className="container mx-auto flex flex-wrap gap-3 content-end">
      <NavBar />
      {children}
    </div>
  )
}
