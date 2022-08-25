import PagePreview from './page';
import CMS from 'netlify-cms-app';

// CMS.registerPreviewStyle('assets/layouts/home.11ty.css');
CMS.registerPreviewTemplate('pages', PagePreview);
