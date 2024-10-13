export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t-2 border-black w-screen mt-auto'>
      <div className='container mx-auto py-1'>
        <div className='flex items-center justify-between'>
          <span>Copyright Castillo Dev</span>
          <span>&copy; {currentYear}</span>
        </div>
      </div>
    </footer>
  )
}
