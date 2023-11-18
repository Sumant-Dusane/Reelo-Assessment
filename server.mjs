import express from "express";
import routes from "./routes/routes.mjs";
import { getFile } from "./helper/cacheQuestions.mjs";

const app = express();
export let cachedData = null;

await getFile()
    .then((data) => {
        cachedData = data;
    })
    .catch((err) => {
        console.log(err);
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.listen(8080, () => {
    console.log("Server live on 8080");
});