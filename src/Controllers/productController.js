exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Product Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Product Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Product Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Product Updated Successfully!"});
 };

