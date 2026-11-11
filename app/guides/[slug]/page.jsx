import { GuideView } from '../../GuideView';
import { guideBySlug } from '../data';
import { guideMetadata, slugParams } from '../meta';

export const dynamicParams = false;
export const generateStaticParams = () => slugParams('en');
export const generateMetadata = ({ params }) => guideMetadata(params.slug, 'en');

export default function Page({ params }) {
  return <GuideView guide={guideBySlug(params.slug, 'en')} lang="en" />;
}
