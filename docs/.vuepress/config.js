module.exports = {
    title: 'Blue Miao',
    description: 'Replace the stars and rivers in the body with unlimited methods for the future.',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        nav: [
            {
                text: 'Blog',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'HTTP', link: '/HTTP/' },
                    { text: 'Library', link: '/Library/' },
                    { text: 'Wheel', link: '/Wheel/' },
                ],
            },
            { text: 'Project', link: '/Project/' },
            { text: 'GitHub', link: 'https://github.com/MiaoLiMing' },
        ],
        sidebar: {
            '/JavaScript/': [
                '',
                'shallow-copy',
                'sort',
                'event-model',
                'inherit',
                'this',
                'event-commission',
                'let&const',
                'qqq',
                'requestAnimationFrame',
                'Browser',
                // 'deep-copy',
                'type',
            ],
            '/CSS/': ['', '47css-trick', 'rem', 'clear-float'],
            '/Vue/': [''],
            '/HTTP/': ['', 'security', 'caching', 'status-code', 'XDomain'],
            '/Library/': ['', 'emoji', 'vscode-theme'],
            '/Wheel/': [''],
        },
    },
    base: '/blogVuepress/',
}
