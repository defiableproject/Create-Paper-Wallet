import type { BrowserRouterProps, HashRouterProps } from 'react-router-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { isFileProtocol } from '@/utils/general';

type Props = BrowserRouterProps | HashRouterProps

export function Router(Props: Props) {
    if (isFileProtocol) {
        return <HashRouter {...Props} />;
    }

    return <BrowserRouter {...Props} />;
}

export default Router;
