exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Message Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Message Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Message Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Message Updated Successfully!"});
 };

