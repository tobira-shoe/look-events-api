import * as Router from 'koa-router'
import DB, { Tags } from '../db'
import { REFILL_INTERVAL } from '../parser/utils'

const router = new Router()
const eventsDB = new DB()

setInterval(() => eventsDB.fill(), REFILL_INTERVAL) // refill Events DB

router.get('/', async ctx => {
    ctx.body = {
        Version: '0.6.0',
        Author: 'Andrew Pashinnik',
        Contact: 'tobirawork@gmail.com',
        Home: 'https://look-events-api.herokuapp.com/',
        GitHub: 'https://github.com/kwoosh/look-events-api/',
    }
})

router.get('/events', async ctx => {
    const tags: Tags = typeof ctx.query.tags === 'string' ? JSON.parse(ctx.query.tags) : ctx.query.tags

    ctx.body = eventsDB.getList(tags)
    ctx.response.set({ 'Content-Type': 'application/json' })
})

router.get('/events/count', async ctx => {
    ctx.body = { count: eventsDB.getCount() }
    ctx.response.set({ 'Content-Type': 'application/json' })
})

router.get('/events/:id', async ctx => {
    const event = eventsDB.get(ctx.params.id)
    if (!event) ctx.throw(404)

    ctx.body = event
    ctx.response.set({ 'Content-Type': 'application/json' })
})

router.get('/tags/topics', async ctx => {
    ctx.body = eventsDB.getTags().topics
    ctx.response.set({ 'Content-Type': 'application/json' })
})

router.get('/tags/places', async ctx => {
    ctx.body = eventsDB.getTags().places
    ctx.response.set({ 'Content-Type': 'application/json' })
})

export default router
