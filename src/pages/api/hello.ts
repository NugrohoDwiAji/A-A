// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from 'path';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // inisialisasi
    const dirPath = path.join(process.cwd(), "/database/db.json");
    const { name, type } = req.body;
    const existedData = fs.readFileSync(dirPath, "utf-8");
    const idData = new Date().getTime();

    // proses
    const arrayData = JSON.parse(existedData);
    arrayData.push({
      id: idData,
      name: name,
      type: type,
    });

    // simpan ke json
    fs.writeFileSync(dirPath, JSON.stringify(arrayData));
    return res
      .status(201)
      .json({ message: "Data Berhasil disimpan", data: arrayData });
  }

  res.status(200).json({  message: "Method Not Allowed"  })
}
