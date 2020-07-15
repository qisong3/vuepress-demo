const NavConfig = require('./config/nav.config')
const SidebarConfig = require('./config/sidebar.config')

module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: '@vuepress/vue',
    themeConfig: {
        nav: NavConfig,
        SidebarConfig
    },


}
