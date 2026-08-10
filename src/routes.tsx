import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from '@/App';
import { HomePage } from '@/pages/home';
import { ProjectsPage } from '@/pages/all-projects';
import { WritingPage } from '@/pages/writing';
import { PostPage, WorkPage } from '@/pages/post';
import { ErrorPage, NotFoundPage } from '@/pages/error';
import { posts, work } from '@/lib/content';

/*
  Route records, not <Routes> — the SSG build walks this list to prerender, and
  getStaticPaths comes from the content, so a new post needs no config change.
*/
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    /* Catches thrown responses and render errors below this route. */
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'writing', element: <WritingPage /> },
      {
        path: 'writing/:slug',
        element: <PostPage />,
        getStaticPaths: () => posts.map((entry) => `/writing/${entry.meta.slug}`),
      },
      {
        path: 'work/:slug',
        element: <WorkPage />,
        getStaticPaths: () =>
          work
            .filter((entry) => entry.meta.writeup)
            .map((entry) => `/work/${entry.meta.slug}`),
      },
      /* Prerendered to dist/404.html, which Vercel serves for unmatched paths. */
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
