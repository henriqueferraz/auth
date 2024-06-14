import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <h1>Home do site</h1>
      <nav className="mt-6">
        <Link className='text-blue-500' href='/portal'>Acesse o Portal</Link> ou{' '}
        <Link className='text-blue-500' href='/portal/cadastro'>Crie uma conta</Link>
      </nav>
    </div>

  );
}
