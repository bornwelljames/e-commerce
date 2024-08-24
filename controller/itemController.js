const Items = require('../models/product');
require('../models/product');

const getItem = async (req, res)=>{
    try{
        const {id} = req.params;
        const item = await Items.findById(id, req.body)
            if(!item){
                res.status(404).json({message:'could not find the item'})
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
        const item = await Items.findByIdAndUpdate(id, req.body);
        
        if(!item){
            res.status(404).json({message:'could not find the item'})
        }
        const updatedItem = await Items.findById(id);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
};

const deleteItem = async (req, res)=>{
    try {
        const {id} = req.params;
        const deleteDoc = await Items.findByIdAndDelete(id);

        if(!deleteDoc){
            res.status(404).json({message:`could not find item with ID ${id}`});
        }
        res.status(200).json({message:`Deleted successfully :${deleteDoc.item}`});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};


module.exports = {getItem, updateItem, deleteItem};