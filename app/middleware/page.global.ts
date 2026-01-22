export default defineNuxtRouteMiddleware((to, from) => {
    const depths: Record<string, number> = {
        '/': 0,
        '/setup': 1,
        '/lobby': 2,
    }
    console.log(to.path, from.path)
    const toDepth = depths[to.path] || 0
    const fromDepth = depths[from.path] || 0

    console.log(toDepth, fromDepth)

    if (toDepth > fromDepth) {
        to.meta.pageTransition = { name: 'page-left' }
        from.meta.pageTransition = { name: 'page-left' }
    } else {
        to.meta.pageTransition = { name: 'page-right' }
        from.meta.pageTransition = { name: 'page-right' }
    }
})