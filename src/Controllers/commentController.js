exports.create = async (req, res) => { 
    res.status(200).json({status:'success', data: "Comment Created Successfully!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:'success', data: "Comment Viewed Successfully!"});
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:'success', data: "Comment Deleted Successfully!"});
};


exports.update = async (req, res) => {
    res.status(200).json({status:'success', data: "Comment Updated Successfully!"});
 };

