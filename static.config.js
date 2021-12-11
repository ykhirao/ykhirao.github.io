import axios from 'axios'
import path from 'path'
const fs = require("fs");

// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const { data: qiita } /* :{ data: Post[] } */ = await axios.get(
      'https://qiita.com/api/v2/users/ykhirao/items?page=1&per_page=100'
    )
    let about;
    fs.readFile("src/data/about.md", "utf-8", (err, data) => {
      if (err) throw err;
      // console.log(data);
      about = data;
    });
    return [
      {
        path: '/qiita',
        getData: () => ({
          qiita,
        }),
        children: qiita.map((post /* : Post */) => ({
          path: `/${post.id}`,
          template: 'src/containers/QiitaPost',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/blog',
        getData: () => ({
          qiita,
        }),
        children: qiita.map((post /* : Post */) => ({
          path: `/${post.id}`,
          template: 'src/containers/QiitaPost',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/about',
        getData: () => ({
          about,
        }),
      },
      {
        path: '/',
        getData: () => ({
          about,
        }),
      },
    ]
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
