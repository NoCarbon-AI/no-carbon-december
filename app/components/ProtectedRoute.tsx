"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isVerified = localStorage.getItem('isVerified');
    if (!isVerified) {
      router.push('/');
    }
  }, [router]);

  return <>{children}</>;
}