'use client';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const switchLanguage = (lang: string) => {
    // Simple implementation: set a cookie or query param
    console.log(`Switch to ${lang}`);
    router.push(`?lang=${lang}`);
  };
  return (
    <div style={{ marginLeft: '1rem' }}>
      <button onClick={() => switchLanguage('en')}>EN</button> | <button onClick={() => switchLanguage('fr')}>FR</button>
    </div>
  );
}