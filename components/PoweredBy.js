export const PoweredBy = () => {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-accents-3 text-center font-bold tracking-widest">
        Brought to you by
      </p>
      <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
        <div className="flex items-center justify-start">
          <a href="https://nextjs.org" aria-label="Next.js Link">
            <img
              src="/img/nextjs.svg"
              alt="Next.js Logo"
              className="h-12 text-primary"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/img/vercel.svg"
              alt="Vercel.com Logo"
              className="h-6 text-primary"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://stripe.com" aria-label="stripe.com Link">
            <img
              src="/img/stripe.svg"
              alt="stripe.com Logo"
              className="h-12 text-primary"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://supabase.io" aria-label="supabase.io Link">
            <img
              src="/img/supabase.svg"
              alt="supabase.io Logo"
              className="h-10 text-primary"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://github.com" aria-label="github.com Link">
            <img
              src="/img/github.svg"
              alt="github.com Logo"
              className="h-8 text-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
