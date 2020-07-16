const NavConfig = require('./config/nav.config')
const SidebarConfig = require('./config/sidebar.config')

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: '@vuepress/theme-vue',
    themeConfig: {
        nav: NavConfig,
        // sidebar: SidebarConfig,
        sidebarDepth: 2,
        sidebar: 'auto',
        displayAllHeaders: true,
        activeHeaderLinks: true
    },


}
