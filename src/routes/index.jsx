import config from '~/configs';

import { HeaderOnly } from '~/layouts';

import { Contact, Home, Live, News, Profile, Search, Upload } from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: News },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.user, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
