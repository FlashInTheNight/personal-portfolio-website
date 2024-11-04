import { Nunito, Mochiy_Pop_One } from 'next/font/google';

export const poppins = Nunito({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const mochiy_pop_one = Mochiy_Pop_One({
  subsets: ['latin'],
  weight: '400',
});
