import { GuidesIndexView } from '../../GuideView';
import { indexMetadata } from '../../guides/meta';

export const metadata = indexMetadata('es');

export default function Page() {
  return <GuidesIndexView lang="es" />;
}
