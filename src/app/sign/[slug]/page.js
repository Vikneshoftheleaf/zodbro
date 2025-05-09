import db from '@/firebase';
import { doc, getDoc } from "firebase/firestore";
import RenderUI from '@/component/render';

export async function generateMetadata({ params }) {

  const q = params.slug

  return {
    title: `Horoscope for ${q.charAt(0).toUpperCase()+q.slice(1)}`,
    description: `Read your horoscope todday ${q}. Get personalized zodiac predictions and insights for ${q} today. Accurate and free.`,
  };
}

export default async function Sign({params})
{
    const q = params.slug
    const docRef = doc(db, "horoscope", "daily");
    const docSnap = await getDoc(docRef);
    let content;
    if (docSnap.exists()) {
      content = docSnap.data().daily_horoscope[q]
      console.log(content)
    } 
      return (
       <RenderUI data={content} sign={q}/>
      );
    }