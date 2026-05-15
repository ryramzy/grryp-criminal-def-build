'use client';

import { useEffect } from 'react';

export const metadata = {
  title: 'Legal Insights & Sentence Reduction News',
  description: 'Updates on federal sentence reduction, compassionate release, post-conviction relief, and criminal defense strategy.',
}

export default function BlogPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://app.trysoro.com/api/embed/9b6d48a8-d96c-4305-b527-5b7301ac8088';
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-warmGold">
          Legal Insights & Sentence Reduction News
        </h1>

        <p className="text-lg text-gray-300 mb-12">
          Updates on federal sentence reduction, compassionate release,
          post-conviction relief, and criminal defense strategy.
        </p>

        <div id="soro-blog"></div>
      </div>
    </main>
  );
}
