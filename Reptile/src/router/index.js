const fs = require('fs')

const useRoutes = function () {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') return
        // const router = require(`./${file}`)
        const { router, routerPass } = require(`./${file}`)
        this.use(routerPass, router)
    })
}

module.exports = useRoutes