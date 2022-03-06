import express from "express";
import catsBL from "../business-logic/cats-bl.js";

const router = express.Router()
const baseUrl = '/api'

router.get(`${baseUrl}/cats`, (req, res) => {
    let result = catsBL.getAll()
    res.send(result)
})

router.get(`${baseUrl}/cats/:id`, (req, res) => {
    let id = +req.params.id

    let result = catsBL.getById(id)
    res.send(result)
})

router.post(`${baseUrl}/cats`, (req, res) => {
    let newCat = req.body

    let result = catsBL.addCat(newCat)
    res.send(result)
})

router.get(`${baseUrl}/cats/ownerById/:id`, (req, res) => {
    let id = +req.params.id
    let requestedOwnerObj = catsBL.getOwnerDetailsById(id)
    res.send(requestedOwnerObj)
})

router.get(`${baseUrl}/cats/ownerPhoneNumberById/:id`, (req, res) => {
    let id = +req.params.id
    let requestedOwnerObj = catsBL.getOwnerDetailsById(id)
    let ownerPhoneNumber = requestedOwnerObj.phone
    res.send(ownerPhoneNumber)
})

router.get(`${baseUrl}/cats/ownerPhoneNumberById/:id`, (req, res) => {
    let id = +req.params.id
    let ownerPhoneNumber = catsBL.getOwnerPhoneById(id)
    res.send(ownerPhoneNumber)
})

export {
    router
}