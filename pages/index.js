import Pricing from '@/components/Pricing';
import { PoweredBy } from '@/components/PoweredBy';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';

export default function PricingPage({ products }) {
  return (
    <>
      <Pricing products={products} />
      <PoweredBy />
    </>
  );
}

export async function getStaticProps() {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}
