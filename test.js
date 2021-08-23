const path = require('path');
const fs = require('fs');
// 获取指定路径 path 下的，默认深度为 3 的目录 JSON
function getIndexByPath(dir, deep = 3) {
    let dirDevide = dir.split('/');
    let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
    let index = {};
    getIndexOfPathByDeep(index, path.join(__dirname, preDir), dirDevide[0], deep + 1);
    return index;
}
// 开始对指定 path 递归查找深度为 deep 深度
function getIndexOfPathByDeep(obj, dir, curDir, deep) {
    console.log('getIndexOfPathByDeep',{
        obj, dir, curDir, deep
    })
    let curPath = path.join(dir, curDir);
    // 达到搜索深度，停止
    if(deep) {
        obj[curDir] = curDir;
        console.log('fs.statSync(curPath)',fs.statSync(curPath))
        console.log('isDirectory',fs.statSync(curPath).isDirectory())
        if(fs.statSync(curPath).isDirectory()) {
            obj[curDir] = {};
            let lists = fs.readdirSync(curPath);
            console.log('lists',lists)
            lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1))
        }
    }

}
let a = getIndexByPath('./docs/Documentation');
console.log(a);
