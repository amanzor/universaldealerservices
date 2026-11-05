import '../../app/globals.css';
import RootShell from '../../components/RootShell';
import c from '../../content/en';
import { buildMetadata } from '../../lib/site';

export const metadata = buildMetadata(c);

export default function RootLayout({ children }) {
  return <RootShell c={c}>{children}</RootShell>;
}
