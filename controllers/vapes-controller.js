const Vape = require("../model/Vape");

const getAllVapes = async (req, res, next) => {
  let vapes;
  try {
    vapes = await Vape.find();
  } catch (err) {
    console.log(err);
  }

  if (!vapes) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ vapes });
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let vape;
    try {
        vape = await Vape.findById(id);
      } catch (err) {
        console.log(err);
      }

      if(!vape){
        return res.status(500).json({message:" No vape found"})
     }
    return res.status(201).json({vape})

};

const addVape = async (req,res,next) =>{
    const {name,flavor,description,price,available,image}= req.body;
    let vape;
    try{
        vape = new Vape({
            name,
            flavor,
            description,
            price,
            available,
            image

        });
        await vape.save();
    }catch(err){
        console.log(err);
    }
     if(!vape){
        return res.status(500).json({message:"unable to add"})
     }
    return res.status(201).json({vape})
    };

    const updateVape = async (req, res, next) => {
        const id = req.params.id;
        const { name, flavor, description, price, available,image } = req.body;
        let vape;
        try {
          vape = await Vape.findByIdAndUpdate(id, {
            name,
            flavor,
            description,
            price,
            available,
            image
          });
          vape = await vape.save();
        } catch (err) {
          console.log(err);
        }
        if (!vape) {
          return res.status(404).json({ message: "Unable To Update By this ID" });
        }
        return res.status(200).json({ vape });
      };

      const deleteVape = async (req, res, next) => {
        const id = req.params.id;
        let vape;
        try {
          vape = await Vape.findByIdAndRemove(id);
        } catch (err) {
          console.log(err);
        }
        if (!vape) {
          return res.status(404).json({ message: "Unable To Delete By this ID" });
        }
        return res.status(200).json({ message: "Product Successfully Deleted" });
      };
      



exports.getAllVapes = getAllVapes;
exports.addVape = addVape;
exports.getById = getById;
exports.updateVape = updateVape;
exports.deleteVape = deleteVape;
