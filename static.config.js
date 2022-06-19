import axios from 'axios'
import path from 'path'
import { promises as fs } from 'fs'
import dayjs from 'dayjs'

console.log(`[static.config.js] is loaded`)

// const now = dayjs().format('YYYYMMDD-HHmm') // 毎分キャッシュ
const now = dayjs().format('YYYYMMDD-HH') // 毎時キャッシュ
console.log(`[static.config.js] Time is ${now}`)
const user = 'yk-hirao'
const connpassAPI =
  `https://connpass.com/api/v1/event/?order=2&count=40&nickname=${user}&owner_nickname=${user}`

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    console.log('#################')
    const posts = await getQiitaPosts()
    const about = await getAboutData()
    const events = await getConnpassEvents()
    console.log('#################')

    if (!posts || !about || !events) {
      console.log(`posts: ${!!posts}, about: ${!!about}, events: ${!!events}`)
      throw new Error('一部データの取得に失敗したので更新を行いません')
    }

    return [
      {
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
      },
      {
        path: '/about',
        getData: () => ({
          about,
        }),
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
      {
        path: '/events',
        getData: () => ({
          events: events.events,
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
    [
      'react-static-plugin-favicons',
      { inputFile: path.resolve(__dirname, './src/assets/icon.png') },
    ],
  ],
}

async function getQiitaPosts() {
  const cache = await getCacheData('qiita')
  if (cache) return cache

  const { data } /* :{ data: QiitaPost[] } */ = await axios.get(
    'https://qiita.com/api/v2/users/ykhirao/items?page=1&per_page=100',
  )

  await writeCacheData('qiita', data)

  return data
}

async function getConnpassEvents() {
  const cache = await getCacheData('connpass')
  if (cache) return cache

  const { data } = await axios.get(connpassAPI).catch(e => {
    console.log(e)
    throw new Error(e.message)
  })

  await writeCacheData('connpass', data)

  return data
}

async function getCacheData(name) {
  console.log(`[getCacheData] name: ${name}, DEBUG: ${process.env.DEBUG}`)
  if (process.env.DEBUG !== 'TRUE') return undefined
  const cachePath = path.resolve(`tmp/cache.${name}.${now}.json`)
  if (await fileExists(cachePath)) {
    return JSON.parse(await fs.readFile(cachePath, 'utf-8'))
  }
}

async function writeCacheData(name, data) {
  console.log(`[writeCacheData] name: ${name}, DEBUG: ${process.env.DEBUG}`)
  const cachePath = path.resolve(`tmp/cache.${name}.${now}.json`)
  if (process.env.DEBUG !== 'TRUE') return
  await fs.writeFile(cachePath, JSON.stringify(data, null, 4), 'utf-8')
}

async function getAboutData() {
  return await fs.readFile('src/data/about.md', 'utf-8')
}

async function fileExists(filepath) {
  return !!(await fs.lstat(filepath).catch(() => false))
}
