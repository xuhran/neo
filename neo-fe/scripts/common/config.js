const childProcess = require('child_process')
const tag = childProcess.execSync('git log -1 --pretty=format:%ad-%h --date=format-local:%Y%m%d-%H%M').toString()

module.exports = {
  tag: tag,
}
