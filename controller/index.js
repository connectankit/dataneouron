const Component = require("../model/Component")

exports.getAllDashboardData = async (req, res) => {
    let response = await Component.find({}).sort({position:-1});
    res.status(200).json(response)
}


exports.create_component = async (req, res) => {
    let bodyPayload = req.body
    let payload = {
        component_name:bodyPayload.component_name,
          height: bodyPayload.height,
          width:bodyPayload.width,
    }
    let response = await Component.create(payload);
    res.status(201).json(response)
}

exports.update_component = async (req, res) => {
    let bodyPayload = req.body
    let payload = {
        component_name:bodyPayload.component_name,
          height: bodyPayload.height,
          width:bodyPayload.width,
    }
    await Component.updateOne({ _id: bodyPayload._id }, payload)
    res.status(200).json({msg:'updated'})
}

exports.delete_component = async (req, res) => {
    let id = req.params.id
     await Component.deleteOne({ _id: id })
    res.status(200).json({msg:'deleted successfully'})
}