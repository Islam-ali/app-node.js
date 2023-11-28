exports.getAllNotes = (req , res) =>{
    res.send('get all note');
}

exports.getById = (req , res) =>{
    res.send('get By Id --- ' + req.params.id);
}