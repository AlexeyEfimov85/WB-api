const express = require('express');
import { myDataSource } from './app-data-source.ts';
import { getWBDataByHour } from './utils/get-and-emit-data.ts';
const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());



myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
let listIds: string[] = []
if (process.env.LIST_ID) {
  listIds = JSON.parse(process.env.LIST_ID)
}
setInterval(getWBDataByHour, 3600000, (listIds));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
}) 