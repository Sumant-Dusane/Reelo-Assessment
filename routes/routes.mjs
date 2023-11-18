import { Router } from "express";
import { fetchQuestions } from "../helper/fetchQuestions.mjs";

const routes = Router();

routes.get('/', async (req, res) => {
    res.status(200).sendFile('data/index.html', {root: __dirname});
});

routes.get('/getQuestions', async(req, res) => {
    res.status(404).send("use POST request this is GET request")
})

routes.post('/getQuestions', async (req, res) => {
    let { subject = "science", topic = "physics", easyRatio = 20, mediumRatio = 50, hardRatio = 30 } = req.body;
    const response = await fetchQuestions(subject, topic, easyRatio, mediumRatio, hardRatio);
    res.status(200).send(response);
});

export default routes;
