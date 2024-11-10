import axios from "axios";
import { Currency } from "../entity/currency.entity.ts";
import { Warehouse } from "../entity/warehouse.entity.ts";
import { myDataSource } from '../app-data-source.ts';
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import 'dotenv/config';
import process from 'process';

export async function getWBDataByHour(listIds: string[]) {
  try {
    const token = process.env.TOKEN
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    console.log(formattedDate);
    const response = await axios.get(`https://common-api.wildberries.ru/api/v1/tariffs/box?date=${formattedDate}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data: Warehouse[] = response.data.response.data.warehouseList.map((item: any) => ({ ...item, currentDate: `${formattedDate}` }))
    await myDataSource.getRepository(Warehouse).delete({ currentDate: `${formattedDate}` })
    await myDataSource.getRepository(Warehouse).save(data);
    // логика записи в лист
    const auth = new GoogleAuth({
      keyFile: "credentials.json",
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const service = google.sheets({ version: 'v4', auth });
    const sheetdata = await myDataSource.getRepository(Warehouse).find({
      order: {
        currentDate: "DESC",
      }
    });
    const arr = sheetdata.map(({ id, ...obj }) => obj);
    const rows = arr.map((item) => Object.values(item))
    let values = rows;
    const requestBody = {
      values,
    };
    listIds.forEach(async (listId) => {
      const range = 'stocks_coefs!A:G';
      const spreadsheetId = listId;
      const valueInputOption = 'RAW';
      try {
        const result = await service.spreadsheets.values.update({
          spreadsheetId,
          range,
          valueInputOption,
          requestBody,
        });
        console.log('cells appended.');
      } catch (error) {
  
        console.log({ error })
  
      }
    })
    
  } catch (error) {
    console.error(error);
  }
}
