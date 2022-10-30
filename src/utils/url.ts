import routes, { IRoute } from '../routes';
import { generatePath } from 'react-router-dom';

export const url = (path: string) => {
  let lastRoute: IRoute,
    url = '';
  // home, weather, favorites
  // lastRoute = {Weather..}
  // url = /
  path.split('.').map((p) => {
    try {
      if (!lastRoute) {
        lastRoute = routes.find((r) => r.name === p) as IRoute;
        url = lastRoute.path as string;
      } else {
        lastRoute = lastRoute.children?.find((lr) => lr.name === p) as IRoute;
        url = '/' + lastRoute.path;
      }
    } catch (e) {
      console.log(e);
    }
  });
  return generatePath(url.replace(/\/\//gi, '/'));
};
