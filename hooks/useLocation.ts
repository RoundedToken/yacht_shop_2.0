import { usePathname } from 'next/navigation';
import { TRoutes } from '../models/enums/EConstants';

export const useLocation = () => ('/' + usePathname().split('/')[2]) as TRoutes;
