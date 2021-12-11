import axios from 'axios'
import path from 'path'
const fs = require("fs").promises;

// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
// @ts-ignore
export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const posts = getQiitaPosts();
    const about = getAboutData();

    const routes = [];
    if (posts) {
      routes.push({
        path: '/posts',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/${post.id}`,
          template: 'src/containers/QiitaPost',
          getData: () => ({
            post,
          }),
        })),
      })
    }
    if (about) {
      routes.push({
        path: '/about',
        getData: () => ({
          about,
        }),
      });
      routes.push({
        path: '/',
        getData: () => ({
          about,
        }),
      })
    }

    return routes;
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}

async function getQiitaPosts() {
  const { data: posts } /* :{ data: QiitaPost[] } */ = await axios.get(
      'https://qiita.com/api/v2/users/ykhirao/items?page=1&per_page=100'
  )

  return posts;
}

async function getAboutData() {
  return await fs.readFile("src/data/about.md", "utf-8");
}
