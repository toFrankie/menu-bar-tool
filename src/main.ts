import { menubar } from 'menubar'
import path from 'path'

const mb = menubar({
  index:
    MAIN_WINDOW_VITE_DEV_SERVER_URL ||
    `file://${path.resolve(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)}`,
  icon: path.resolve(__dirname, 'images/icon.png'),
})

mb.on('ready', () => {
  console.log('Menubar app is ready.')
  !MAIN_WINDOW_VITE_DEV_SERVER_URL && mb.window.webContents.openDevTools()
})

mb.on('after-hide', () => {
  mb.app.hide()
})
