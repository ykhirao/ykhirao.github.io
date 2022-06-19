import axios from 'axios'
import path from 'path'
import { promises as fs } from 'fs'
import dayjs from 'dayjs'

// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
// @ts-ignore
export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    console.log('#################')
    const posts = await getQiitaPosts()
    const about = await getAboutData()
    const events = await getConnpassEvents()
    console.log('#################')

    if (!posts || !about || !events) {
      console.log(posts)
      console.log(about)
      console.log(events)
      throw new Error('一部データの取得に失敗したので更新を行いません')
    }

    const routes = []

    routes.push({
      path: '/posts',
      getData: () => ({
        posts,
      }),
      children: posts.map((post /* : Post */) => ({
        path: `/${post.id}`,
        template: 'src/components/QiitaPost',
        getData: () => ({
          post,
        }),
      })),
    })

    routes.push({
      path: '/about',
      getData: () => ({
        about,
      }),
    })

    routes.push({
      path: '/',
      getData: () => ({
        about,
      }),
    })

    routes.push({
      path: '/events',
      getData: () => ({
        events: events.events,
      }),
    })

    return routes
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
    [
      'react-static-plugin-favicons',
      { inputFile: path.resolve(__dirname, './src/assets/icon.png') },
    ],
  ],
}

async function getQiitaPosts() {
  const cachePath = path.resolve('tmp/cache.qiita.json')
  if (await fileExists(cachePath)) {
    console.log('[getQiitaPosts] GET Cache Data')
    return JSON.parse(await fs.readFile(cachePath, 'utf-8'))
  }
  const { data } /* :{ data: QiitaPost[] } */ = await axios.get(
    'https://qiita.com/api/v2/users/ykhirao/items?page=1&per_page=100',
  )
  if (process.env.DEBUG === 'TRUE') {
    await fs.writeFile(cachePath, JSON.stringify(data, null, 4), 'utf-8')
  }

  return data
}

async function getConnpassEvents() {
  const connpassUsers = 'yk-hirao'
  const connpassAPI =
    'https://connpass.com/api/v1/event/?order=2&count=40&nickname=' +
    connpassUsers +
    '&owner_nickname=' +
    connpassUsers

  const cachePath = path.resolve('tmp/cache.connpass.json')
  if (await fileExists(cachePath)) {
    console.log('[getConnpassEvents] GET Cache Data')
    return JSON.parse(await fs.readFile(cachePath, 'utf-8'))
  }

  console.log('[getConnpassEvents] DEBUG FALSE')
  const { data } /* :{ data: QiitaPost[] } */ = await axios.get(connpassAPI).catch(e => {
    console.log(e)
    throw new Error(e.message)
  })

  if (process.env.DEBUG === 'TRUE') {
    await fs.writeFile(cachePath, JSON.stringify(data, null, 4), 'utf-8')
  }
  return data
}

async function getAboutData() {
  return await fs.readFile('src/data/about.md', 'utf-8')
}

async function fileExists(filepath) {
  return !!(await fs.lstat(filepath).catch(() => false))
}
