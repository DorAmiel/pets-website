const deleteForbbiden = (req, res, next) => {
    if (req.method === "DELETE") {
        res.status(403).send("Delete is forbbiden")
    }
    next()
}

export {
    deleteForbbiden
}