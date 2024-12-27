'use client';

import { useEffect, useState } from 'react';

export function WelcomeMessage() {
  const [userData, setUserData] = useState<{ company_name: string } | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <p className="mt-4 text-zinc-400">
      {userData ? 
        `Look who's here from ${userData.company_name}, thanks for accepting the invite!` : 
        "Welcome!"
      }
    </p>
  );
}
