import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
      <Link href="/">
        <Image src="/logo.png" alt="Resumora" width={150} height={50} />
      </Link>
      <nav style={{ marginLeft: 'auto' }}>
        <Link href="/login">Client Login</Link>
      </nav>
    </header>
  );
}