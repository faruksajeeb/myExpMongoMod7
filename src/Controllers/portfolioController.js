exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Porfolio Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Porfolio Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Porfolio Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Porfolio Updated Successfully!"});
 };

