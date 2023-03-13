import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/i18n';
import '@/libs/networksExtension';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

import { isFileProtocol } from '@/utils/general';

import App from '@/App';
import Router from '@/components/Router';
import Theme from '@/components/chakra/Theme';
import ThemeFilesystem from '@/components/chakra/ThemeFilesystem';

const ThemeComponent = isFileProtocol ? ThemeFilesystem : Theme;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <ThemeComponent>
                <App />
            </ThemeComponent>
        </Router>
    </StrictMode>,
);
