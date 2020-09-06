const childProcess = require('child_process')
const config = require('./common/config')

const shellContent = `REACT_APP_TAG=${config.tag} GENERATE_SOURCEMAP=false react-app-rewired build`

childProcess.execSync(shellContent, { stdio: 'inherit' })
