// # 
// GET https://connpass.com/api/v1/event/?order=2&count=20&nickname=yk-hirao&owner_nickname=yk-hirao

// ### 
// GET https://qiita.com/api/v2/users/ykhirao/items?page=1&per_page=100

const fs = require("fs").promises;

async function fileExists(filepath) {
    return !!(await fs.lstat(filepath).catch(() => false));
}

async function main (){
    const data = await fileExists('./connpass.log.json')
    console.log(data);
}

main()
