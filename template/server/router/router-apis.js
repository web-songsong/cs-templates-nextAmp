const requireContext = require('require-context')
const path = require('path')
const fs = require('fs')

function importAll(r) {
  return r.keys().map((...ars) => {
    return r(...ars)
  })
}

const apisPath = path.resolve(__dirname, '../apis')

const dirs = fs.readdirSync(apisPath)

module.exports = router => {
  dirs.forEach(dirName => {
    const files = requireContext(path.join(apisPath, dirName), false, 'index.js')
    importAll(files).forEach(route => {
      router.use(`/${dirName}`, route)
    })
  })
}
