import Image from 'next/image';

// images
import next from '../public/img/nextjs.svg';
import vercel from '../public/img/vercel.svg';
import stripe from '../public/img/stripe.svg';
import supabase from '../public/img/supabase.svg';
import github from '../public/img/github.svg';

export const PoweredBy = () => {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-accents-3 text-center font-bold tracking-widest">
        Brought to you by
      </p>
      <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
        <div className="flex items-center justify-start">
          <a href="https://nextjs.org" aria-label="Next.js Link">
            <Image
              className="h-12 text-primary"
              src={next}
              alt="Nextjs Big Logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <Image
              className="h-6 text-primary"
              src={vercel}
              alt="Vercel Logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://stripe.com" aria-label="stripe.com Link">
            <Image
              className="h-12 text-primary"
              src={stripe}
              alt="Stripe Logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://supabase.io" aria-label="supabase.io Link">
            <Image
              className="h-10 text-primary"
              src={supabase}
              alt="Supabase Logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://github.com" aria-label="github.com Link">
            <Image
              className="h-8 text-primary"
              src={github}
              alt="GitHub Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
