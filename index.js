const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
const AWS_METADATA_URL = "http://169.254.169.254/latest/meta-data/placement/";

app.get("/metadata", async (req, res) => {
    try {
        const region = await axios.get(AWS_METADATA_URL + "region");
        const az = await axios.get(AWS_METADATA_URL + "availability-zone");

        res.json({
            region: region.data,
            availability_zone: az.data
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch metadata" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
