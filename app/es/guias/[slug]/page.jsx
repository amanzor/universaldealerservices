import { GuideView } from '../../../GuideView';
import { guideBySlug } from '../../../guides/data';
import { guideMetadata, slugParams } from '../../../guides/meta';

export const dynamicParams = false;
export const generateStaticParams = () => slugParams('es');
export const generateMetadata = ({ params }) => guideMetadata(params.slug, 'es');

export default function Page({ params }) {
  return <GuideView guide={guideBySlug(params.slug, 'es')} lang="es" />;
}
