import manifest from './manifest';

import GalleryLayout from '@/lib/GalleryLayout';

export default {
  render(h) {
    return <GalleryLayout manifest={manifest} />
  }
};
