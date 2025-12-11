import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const PokiesPage = lazy(() => import('../pages/pokies/page'));
const LiveCasinoPage = lazy(() => import('../pages/live-casino/page'));
const SportsPage = lazy(() => import('../pages/sports/page'));
const SlotsPage = lazy(() => import('../pages/slots/page'));
const ArticlePage = lazy(() => import('../pages/article/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const FAQPage = lazy(() => import('../pages/faq/page'));
const ResponsibleGamingPage = lazy(() => import('../pages/responsible-gaming/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pokies',
    element: <PokiesPage />,
  },
  {
    path: '/live-casino',
    element: <LiveCasinoPage />,
  },
  {
    path: '/sports',
    element: <SportsPage />,
  },
  {
    path: '/slots',
    element: <SlotsPage />,
  },
  {
    path: '/article/:id',
    element: <ArticlePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
  },
  {
    path: '/responsible-gaming',
    element: <ResponsibleGamingPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
