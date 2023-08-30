import { useRouter } from 'next/router';

export default function Footer () {
  const { pathname } = useRouter();

  return (
    <footer className={'flex flex-col items-center gap-6 justify-center my-10 lg:flex-row'}>
      <a className={'text-[#C8C7D8]'} href={'./join-us'}>Dołącz jako specjalista</a>
      <a className={'text-[#C8C7D8]'} href={pathname.includes('join-us') ? '/join-us/faq' : '/faq'}>FAQ</a>
      <a className={'text-[#C8C7D8]'} href={'./polityka-prywatnosci'}>Polityka prywatności</a>
      <a className={'text-[#C8C7D8]'} href={'./polityka-cookies'}>Polityka cookies</a>
      <a className={'text-[#C8C7D8]'} href={'./regulamin'}>Regulamin</a>
    </footer>
  );
}