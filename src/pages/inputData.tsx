import React from 'react'
import { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';

type formDataType = {
    id: number;
    name: string;
    type: string;
  };
  

export default function inputData() {
    const [data, setData] = useState<formDataType[]>([]);

    async function handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
        const formJSONData = Object.fromEntries(formData.entries());

        const response = await axios.post(
            "http://localhost:3000/api/hello",
            formJSONData
          );
      
          setData(response.data.data);
        }
  return (
    <div>
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-2">
        <h1>Form :</h1>
        <input
          type="text"
          name="name"
          id=""
          className="border border-gray-600 max-w-xs"
        />
        <input
          type="text"
          name="type"
          id=""
          className="border border-gray-600 max-w-xs"
        />
        <button type="submit" className="bg-green-500 max-w-xs">
          Kirim Data
        </button>
        </form>
    </div>
  )
}
