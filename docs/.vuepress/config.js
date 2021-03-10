module.exports = {
    title: 'QQMini.PluginSDK',
    description: 'QQMini.PluginSDK 开发文档',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/Guide/' },
            { text: 'API', link: '/API/'},
            { text: '事件', link: '/Event/'}
        ],
        sidebar: {
            '/Guide/': [
                '/Guide/',
                '/Guide/Require/',
                '/Guide/Setup/',
                '/Guide/Code/',
                '/Guide/Deploy/',
                '/Guide/AddWindow/',
                '/Guide/Update/',
                '/Guide/Debug/'
            ],
            '/API/':[
                '/API/'
            ]
        },
        displayAllHeaders: true,
        activeHeaderLinks: true
    }
}