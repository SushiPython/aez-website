import { redirect } from 'next/navigation';

const stripeDonationUrl =
  'https://donate.stripe.com/test_cNiaEZ75j3Rw1JN7v173G00';

// Keep the old URL working without maintaining a separate donation page.
export default function DonatePage() {
  redirect(stripeDonationUrl);
}
