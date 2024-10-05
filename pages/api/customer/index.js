import Customer from "../../../models/customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ status: "failed", message: "Error in connecting DB" });
        return;
    }

    if (req.method === "POST") {
        const data = req.body.data;
        console.log("Incoming Data: ", data);

        if (!data.name || !data.lastName || !data.email) {
            res.status(400).json({ status: "failed", message: "Invalid Data" });
            return;
        }

        try {
            const customer = await Customer.create(data);
            res.status(201).json({
                status: "success",
                message: "Creating customer successful",
                data: customer,
            });
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ status: "failed", message: "Creating customer failed!" });
        }
    } else {
        res.status(405).json({ status: "failed", message: "Method not allowed" });
    }
}