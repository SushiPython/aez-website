import { redirect } from 'next/navigation';

const stripeDonationUrl =
  'https://buy.stripe.com/test_28EdRbdtH5ZE0FJ3eL73G01';

// Keep the old URL working without maintaining a separate donation page.
export default function DonatePage() {
  redirect(stripeDonationUrl);
}
