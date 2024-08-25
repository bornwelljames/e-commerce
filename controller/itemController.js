const { render } = require('ejs');
const Products = require('../models/product');

const dashboard = async(req, res)=>{
    try {
        const products = await Products.find({});
        if(products){
        res.status(200).render('./dashboard/dashboard',{
            products
        });
        if(!products){
            res.status(404).render('404',{
                error:"Error 404 - Items Not Found!"
            })
        }
    }
    } catch (error) {
        
    }
    
}
const getItem = async (req, res)=>{
    try{
        const {id} = req.params;
        const item = await Products.findById(id, req.body)
            if(!item){
                res.status(404).
                res.render('404',{
                    error:"Error 404 - Item Not Found!"
                })
            }
            if(item){
                res.status(200).json(item);
            }
    }catch(error){
        //console.log(err.message);
        res.status(500).json({error:error.message});
    }
};


const updateItem =async (req, res)=>{
    try {
        const {id} = req.params;
        const item = await Products.findByIdAndUpdate(id, req.body);
        
        if(!item){
            res.status(404).
            render('404',{
                error:"Error 404 - Items Not Found!"
            })
        }
        const updatedItem = await Products.findById(id);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
};

const deleteItem = async (req, res)=>{
    try {
        const {id} = req.params;
        const deleteDoc = await Products.findByIdAndDelete(id);

        if(!deleteDoc){
            res.status(404)
            render('404',{
                error:`could not find item with ID ${id}`
            })
        }
        res.status(200).json({message:`Deleted successfully :${deleteDoc.item}`});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};


module.exports = {dashboard, getItem, updateItem, deleteItem};