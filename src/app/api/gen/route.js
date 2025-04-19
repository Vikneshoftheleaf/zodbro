
import { NextResponse } from "next/server";

import { GoogleGenAI } from '@google/genai';
import db from "@/firebase";

import { doc, setDoc } from "firebase/firestore";


// Add a new document in collection "cities"

export async function GET() {


  function removeMarkdownAndParseJSON(text) {
    if (typeof text !== 'string') {
      console.error("Input must be a string.");
      return null;
    }
  
    const startMarker = '```json\n';
    const endMarker = '```';
    let jsonString = text.trim(); // Trim leading/trailing whitespace
  
    // Check if the text starts with the markdown marker
    if (jsonString.startsWith(startMarker)) {
      // Find the index after the start marker
      const startIndex = startMarker.length;
      // Find the index of the end marker after the start index
      const endIndex = jsonString.indexOf(endMarker, startIndex);
  
      // If both markers are found
      if (endIndex !== -1) {
        jsonString = jsonString.substring(startIndex, endIndex).trim();
      } else {
        // Start marker found, but no end marker
        console.warn("Found JSON markdown start marker but no end marker.");
        // Attempt to parse the rest of the string
        jsonString = jsonString.substring(startIndex).trim();
      }
    } else if (jsonString.startsWith('```') && jsonString.endsWith(endMarker)) {
        // Handle cases like ```\n{...}\n``` or ```{...}``` without 'json'
         const startIndex = jsonString.indexOf('\n') !== -1 ? jsonString.indexOf('\n') + 1 : 3; // Find newline after ``` or just take 3 chars
         const endIndex = jsonString.lastIndexOf(endMarker);
         if (endIndex > startIndex) {
             jsonString = jsonString.substring(startIndex, endIndex).trim();
         } else {
             // Only ``` at the start? Unlikely, but handle
              console.warn("Found generic markdown start marker but problematic end.");
               jsonString = jsonString.substring(3).trim();
         }
  
    } else if (jsonString.endsWith(endMarker)) {
         // Found end marker but no start, likely just the end marker attached
          jsonString = jsonString.substring(0, jsonString.lastIndexOf(endMarker)).trim();
    }
    // If no markers found, assume the original string is just the JSON
  
    try {
      // Attempt to parse the cleaned string
      const parsedJSON = JSON.parse(jsonString);
      return parsedJSON;
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      console.error("Attempted to parse string:", jsonString);
      return null; // Return null or throw error on failure
    }
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });


  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: 'create a json on daily horoscope the json should contain all 12 signs with subsection, todat_vibe(eg: High Energy), today_horoscope(150 characters),good_time(eg:8 am - 9:30 pm),bad_time (eg:8 am - 9:30 pm),love(100 char),carrer(100 char),health(100 char),wealth(100 char),lucky_elements[eg:black tshirt, ],mood_indicator[0-100%], only json content, no extra text',
    //contents:"create a json object with three dummy data, no additional text, only json as respone",
  });

  const result = removeMarkdownAndParseJSON(response.text);

  /** 
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
    **/

  await setDoc(doc(db, "horoscope", "daily"), result);
  return NextResponse.json({message: "done"})
}
