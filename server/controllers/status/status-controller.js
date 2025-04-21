import { isDBConnected } from "../../utils/db.js";

const status = async (req, res) => {
    if(isDBConnected) return res.status(200).json({statusText: "OK"});
    else return res.status(503).json({statusText: "Error"});
}

export default status;