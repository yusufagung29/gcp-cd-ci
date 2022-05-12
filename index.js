const { Firestore } = require('@google-cloud/firestore')
const express = require('express')
const app = express()
const {nanoid} = require('nanoid')

app.use(express.json())

const firestore = new Firestore({
    projectId: 'parkir-yuk-349606',
    keyFilename: 'parkir-yuk-349606-firebase-adminsdk-oc9q6-d0f5507e2a.json'
})

const db = firestore.collection(`'users'`)

app.get('/',async (req,res)=>{
    const result = await db.get() 
    res.send(result.docs.map(doc => doc.data()))
    // res.send('tes')
})

app.post('/post', async (req,res)=>{
    const nama = req.body.nama
    const doc = req.body.doc

    await db.doc(`awa`).set({
        name: nama,
        npm : 1
    })
    res.send('success')
})

app.listen(8080,()=>{
    console.log('connect at 5000')
})