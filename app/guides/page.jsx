import { GuidesIndexView } from '../GuideView';
import { indexMetadata } from './meta';

export const metadata = indexMetadata('en');

export default function Page() {
  return <GuidesIndexView lang="en" />;
}
