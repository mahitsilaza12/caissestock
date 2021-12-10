const { Depense } = require('../models/index');
const { Op } = require('sequelize');
const sequelize = require("sequelize");

const db =require("../models/index");
const all= async(req, res)=>{
try{
    const Depenses = await Depense.findAll();
    return res.json(Depenses);
}catch(error){
    res.status(500).json({error:message.error});
}
}


const get = async(req, res)=>{
    Depense.findByPk(req.params.id)
          .then(test=>{
              res.json(test)
          })
}
const add =async(req,res)=>{
    try{
        const data={
            name:req.body.name,
            description:req.body.description,
            motif:req.body.motif,
            type:req.body.type,
            montant:req.body.montant,
            datedepense:req.body.datedepense

        }
        const Depenses = await Depense.create(data);
        return res.json(Depenses)
    }catch(error){
     res.status(500).json({error:message.error});
    }
}

const update = async(req, res)=>{
    const data={
            name:req.body.name,
            description:req.body.description,
            motif:req.body.motif,
            type:req.body.type,
            montant:req.body.montant,
            datedepense:req.body.datedepense
    }
    const id = req.params.id
    try{
        const Depenses= Depense.update(data,{where:{id}});
        res.json(Depenses);
    }catch(error){
     res.status(500).json({error:message.error});

    }
}

const del = async(req, res)=>{
    const id=req.params.id;
try{
    const reg = await Depense.destroy({where:{id}})
    res.json(reg);
}catch(error){
    res.status(500).json({error:message.error})
}    
}

const datediff= async(req, res)=>{
    const { debut,fin } = req.params
    console.log(req.query)
    try{
        if(debut!=undefined && fin != undefined){
            date = await Depense.findAll({
                order:[
                ['datedepense','DESC']
                ],
                where:{
                    datedepense:{
                        [Op.between]:[debut, fin]
                    }
                }
            })
        }else{
             return res.status(404).json({
                error: "not found"
            });
        }
        return res.status(200).json({
            date
        })

    }catch(error){

    res.status(500).json({error:message.error})

    }
}

const recherch= async(req, res)=>{
    const {nom,description,id,motif,date,montant}=req.query
    console.log(nom)
    sql="SELECT id, name, description, motif,type, montant, datedepense FROM depenses where id LIKE '"+id+"%' or name LIKE '"+nom+"%' or  description LIKE '"+description+"%' or motif LIKE '"+motif+"%' or montant LIKE '"+montant+"%' or datedepense LIKE '"+date+"%'"
    try{
    
        db.sequelize.query(
            sql,
             { type: sequelize.QueryTypes.SELECT}
             )
        .then((date) => {
            return res.status(200).json({date})
        }) 
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({error:error.message})
    }

}

module.exports={
    all
    ,get,add,update,del,datediff,recherch
}