import { Route, Routes } from 'react-router-dom';

import { Flex, Show } from '@chakra-ui/react';

import { NavHorizontal, NavVertical } from '@/features/app';

import Home from '@/pages/Home';
import SimpleWallet from '@/pages/SimpleWallet';
import AdvancedWallet from '@/pages/AdvancedWallet';
import Vanity from '@/pages/Vanity';
import Info from '@/pages/Info';
import AboutUs from '@/pages/AboutUs';

export const navBreakpoint = 'lg';

export default function App() {
    return (
        <Flex direction={{ base: 'column', [navBreakpoint]: 'row' }} wrap="nowrap" minH="100vh">
            <Show above={navBreakpoint}>
                <NavVertical />
            </Show>
            <Show below={navBreakpoint}>
                <NavHorizontal />
            </Show>

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/wallet">
                    <Route path="simple">
                        <Route index element={<SimpleWallet.Home />} />

                        <Route path="addresses" element={<SimpleWallet.Addresses />} />
                    </Route>

                    <Route path="advanced">
                        <Route index element={<AdvancedWallet.Home />} />

                        <Route path="settings" element={<AdvancedWallet.Settings />} />

                        <Route path="addresses" element={<AdvancedWallet.Addresses />} />
                    </Route>
                </Route>

                <Route path="/vanity" element={<Vanity />} />

                <Route path="/info" element={<Info />} />

                <Route path="/about-us" element={<AboutUs />} />

                <Route path="*" element={<Home />} />
            </Routes>
        </Flex>
    );
}
