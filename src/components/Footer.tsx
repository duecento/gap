import { contact } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-gap-black py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} GAP Ministries. All rights reserved.
        </p>
        <p className="text-sm">
          {contact.address} &middot;{' '}
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-white">
            {contact.phone}
          </a>
        </p>
      </div>
    </footer>
  );
}
