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
            '/Guide/':[{
                title: '指南',
                collapsable: false,
                sidebarDepth: -1,
                children: [
                    '/Guide/',
                    '/Guide/Require/',
                    '/Guide/Setup/',
                    '/Guide/Code/',
                    '/Guide/Deploy/',
                    '/Guide/AddWindow/',
                    '/Guide/Update/',
                    '/Guide/Debug/'
                ]
            }],
            '/API/':[
                '/API/'
            ],
            '/Event/':[ {
                title: '事件列表',
                path: '/Event/',
                collapsable: false,
                sidebarDepth: 2
            }]
        },
        sidebarDepth: 2,
        collapsable: true,
        displayAllHeaders: true,
        activeHeaderLinks: true
    }
}