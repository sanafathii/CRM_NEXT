import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ status: "failed", message: "Error in connecting to DB" });
        return;
    }

    if (req.method === "DELETE") {
        const id = req.query.customerId;
        try {
            await Customer.deleteOne({ _id: id });
            res
                .status(200)
                .json({ status: "succsses", message: "Delete customer successful" });
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ status: "faild", message: "Eroor in Deleteing customer" });
        }
    }
}