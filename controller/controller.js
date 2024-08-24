require('../routes/router');
const Products = require('../models/product');

const HomePage = (req, res)=>{

    Products.find({}).sort({category:-1}).limit(4).then((items)=>{
        if(items){
            res.status(200).render('index',{
                items:items
            })
        }else if(!items){
            res.status(404).json({message:'coould not find the items'});
        }
    }).catch(err=>{
        console.log(err.message);
        res.status(500).json({message:err.message});
    })
};

const meatSection = (req, res)=>{
    Products.find({category:'Meat'}).sort({timestamp:-1}).then((documents)=>{
        if(documents){
            res.status(200).json(documents);
        }

        if(!documents){
            res.status(404).json({message:'resources not found'});
        }
    }).catch(error=>{
        console.log(error.message);
    });
};

const vegetableSection = (req, res)=>{
    Products.find({category:'Fruit'}).sort({timestamp:-1}).then((documents)=>{
        if(documents){
            res.status(200).json(documents);
        }

        if(!documents){
            res.status(404).json({message:'resources not found'});
        }
    }).catch(error=>{
        console.log(error.message);
    })
};

const uploadData = (req, res)=>{
    const product = req.body.item;
   Products.findOne({item:product}).then((data)=>{
    if(data){
        res.status(302).json({message:"data existent in the database"},data);
    }
    if(!data){
        Products.create(req.body).then((doc)=>{
            res.status(201).json(doc);
        })
    }
   }).catch(error=>{
    console.log(error.message);
    res.status(500).json({message:error.message})
   })
};



module.exports = {HomePage, meatSection, vegetableSection, uploadData}