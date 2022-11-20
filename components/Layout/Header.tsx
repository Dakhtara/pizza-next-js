import Link from 'next/link'

export default function Header() {
  return (
    <div className="sticky top-0 bg-header drop-shadow-md">
      <div className="container mx-auto py-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-8">
            <Link href={'/'}>
              <img src="logo.png" alt="Pizza West Logo" width="80" />
            </Link>
          </div>
          <Link href="/menu">Menu</Link>
        </div>
        <div className="flex gap-5">
          <span>Boutique Olonne sur Mer</span>
          <span>Se connecter</span>
        </div>
      </div>
    </div>
  )
}
