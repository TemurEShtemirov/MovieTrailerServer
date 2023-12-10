import express from 'express'

async function bootsrap(){
    const app = express()

    app.use(express.json)
}