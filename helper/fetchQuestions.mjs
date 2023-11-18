import * as fileStream from "fs";
import * as JSONStream from "JSONStream";
import { cachedData } from "../server.mjs";

export const fetchQuestions = async(subject, topic, easyRatio, mediumRatio, hardRatio) => {
    if(!cachedData) return [];

    const quesArr = {
        easy: [],
        medium: [],
        hard: []
    };
    const limits = {
        easy: easyRatio,
        medium: mediumRatio,
        hard: hardRatio 
    }

    await cachedData[0].forEach((obj, index) => {
        if(obj.subject === subject && obj.topic === topic) {
            if(quesArr[obj.difficulty].length < limits[obj.difficulty]) {
                quesArr[obj.difficulty].push(obj);
            }
        }
    });

    return quesArr;
}