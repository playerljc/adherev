import GalleryLayout from '@/lib/GalleryLayout';

import manifest from './manifest';

export default {
  render(h) {
    return <GalleryLayout manifest={manifest} />;
  },
};
