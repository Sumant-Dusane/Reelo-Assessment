import * as fileStream from "fs";
import * as JSONStream from "JSONStream";

export function getFile() {
    return new Promise((resolve, reject) => {
        const inputStream = fileStream.createReadStream('data/data.json', 'utf8');
        const data = [];
    
        inputStream
            .pipe(JSONStream.parse('*'))
            .on('data', (fileData) => {
                data.push(fileData);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (err) => {
                reject(err);
            })
    })
}