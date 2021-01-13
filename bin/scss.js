const path = require("path")
const cwd = process.cwd()
const fs = require("fs")

class ScssTree {
  constructor (pid) {

  }
}

ScssTree.id = 0

function parseScss () {
  const indexScssFile = path.resolve(cwd, "sample/public/index.scss")
  const scssContent = fs.readFileSync(indexScssFile, "utf8")
  // console.log("scssContent:", scssContent)
  // todo 
  // 使用正则表达式匹配css内容，构建样式树
  //
}

parseScss()