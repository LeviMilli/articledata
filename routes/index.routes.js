const router = require("express").Router();

let InfoModel = require('../models/Info.model')



router.get("/", (req, res, next) => {
  res.json("All good in here");
});




router.get('/info', (req, res) => {
  InfoModel.find()
       .then((info) => {
        console.log(info)
            res.status(200).json(info)
       })
       .catch((err) => {
            res.status(500).json({
                 error: 'Something went wrong',
                 message: err
            })
       })         
})


router.post('/addinfo', (req, res) => {  
  const {title, article, url, fullArticle, order} = req.body;
  
  console.log(req.body)
  InfoModel.create({title: title, article: article,  url: url, order: order, fullArticle: fullArticle })
  .then((response) => {
       res.status(200).json(response)
  })
  .catch((err) => {
       res.status(500).json({
            error: 'Something went wrong',
            message: err
       })
  })  
})

router.delete('/info/:id', (req, res) => {
  InfoModel.findByIdAndDelete(req.params.id)
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        })  
})


router.get('/info/:id', (req, res) => {  
     InfoModel.findById(req.params.id)
           .then((response) => {
                    res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })


router.patch('/info/:id', (req, res) => {
  let id = req.params.id
  const {title, article, url, fullArticle, order} = req.body;
  console.log(title, id)
  InfoModel.findByIdAndUpdate(id, 
       {$set: 
            {title: title, article: article, url: url, order: order, fullArticle: fullArticle}}, {new: true})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        }) 
})


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
