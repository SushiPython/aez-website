import { redirect } from 'next/navigation';

const stripeDonationUrl =
  'https://buy.stripe.com/eVqbJ18wzc8q9jb8vA24000';

// Keep the old URL working without maintaining a separate donation page.
export default function DonatePage() {
  redirect(stripeDonationUrl);
}
