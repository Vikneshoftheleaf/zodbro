import db from '@/firebase';
import { doc, getDoc } from "firebase/firestore";
import RenderUI from '@/component/render';

export async function generateMetadata({ params }) {

  const q = params.slug

  return {
    title: `${q.charAt(0).toUpperCase()+q.slice(1)} - Today Horoscope`,
    description: `Today horoscope for ${q}`,
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
    } 
      return (
       <RenderUI data={content} sign={q}/>
      );
    }