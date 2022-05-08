const {Firestore} = require('@google-cloud/firestore')
const express = require('express')
const app = express()
const {nanoid} = require('nanoid')
const bp = require('body-parser')

app.use(bp.urlencoded({extended: true}))
app.use(express.json())

const firestore = new Firestore({
    projectId: 'parkir-yuk-349606',
    keyFilename: 'parkir-yuk-349606-firebase-adminsdk-oc9q6-d0f5507e2a.json'
})
const db = firestore.collection('users')

app.get('/',async (req,res)=>{
    const result = await db.get()
    res.send(result.docs.map(doc => doc.data()))
})

app.post('/post', async (req,res)=>{
    const nama = req.body.nama

    await db.doc(`${nanoid(16)}`).set({
        name: nama
    })
    res.send('success')
})

app.listen(5000,()=>{
    console.log('connect at 5000')
})