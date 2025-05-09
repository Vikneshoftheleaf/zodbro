'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SocialShare = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [url, setUrl] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fullUrl = `${window.location.origin}${pathname}?${searchParams.toString()}`;
    setUrl(fullUrl);
    setMenuOpen(false)
  }, [pathname, searchParams]); // Run effect on route or query param change

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const shareText = encodeURIComponent(
    'Get your FREE horoscope reading today and discover what the universe has in store for you. Start your journey now! 🔮'
  );

  const shareLinks = {
    Twitter: `https://twitter.com/intent/tweet?url=${url}&text=${shareText}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    LinkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${shareText}`,
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openLinkInNewTab = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="bg-white/10 text-white/90 px-4 py-2 rounded hover:bg-white/20 flex gap-2 items-center cursor-pointer"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-share-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
          </svg>
        </span>
        Share
      </button>

      {menuOpen && (
        <div className="absolute right-0 z-50 mt-2 bg-zinc-800 border border-white/20 rounded shadow-lg min-w-[140px]">
          {Object.entries(shareLinks).map(([name, link]) => (
            <button
              key={name}
              onClick={() => openLinkInNewTab(link)}
              className="block w-full text-left px-4 py-2 text-white/90 hover:bg-white/20"
            >
              {name}
            </button>
          ))}
          <button
            onClick={handleCopy}
            className="block w-full text-left px-4 py-2 text-white/90 hover:bg-white/20"
          >
            {copied ? 'Copied' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
