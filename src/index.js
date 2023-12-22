const { menubar } = require('menubar')
const path = require('path')

const mb = menubar({
  index: `file://${path.resolve(__dirname, 'index.html')}`,
})

mb.on('ready', () => {
  console.log('Menubar app is ready.')
})
