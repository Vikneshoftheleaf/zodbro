
import { NextResponse  } from "next/server";

import db from "@/firebase";

import { doc, setDoc } from "firebase/firestore"; 

import Groq from "groq-sdk";

// Add a new document in collection "cities"

export async function GET() {

    const client = new Groq({
        apiKey: process.env['GROQ_API_KEY']
      });
      
     async function gen(para)
     {
        const chatCompletion = await client.chat.completions.create({
          messages: [{ role: 'user', content: `today horoscope for ${para}, no AI response words, make it more like a human, no additional words, just straight into the content, the response should be medium in size.` }],
          model: 'llama3-8b-8192',
        });

        return chatCompletion.choices[0].message.content
    }
      
    const zodiacSigns = [
      "aries", "taurus", "gemini", "cancer", "leo", "virgo",
      "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
    ];
    
    const horoscopeData = {};
    
    for (const sign of zodiacSigns) {
      horoscopeData[sign] = await gen(sign);
    }
    
    await setDoc(doc(db, "horoscope", "daily"), horoscopeData);
    

    return NextResponse.json({
        messgae:"Done",
    })
}
