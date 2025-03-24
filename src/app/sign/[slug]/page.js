import db from '@/firebase';
import { doc, getDoc } from "firebase/firestore";
import RenderUI from '@/component/render';

export default async function Sign({params})
{
    const q = params.slug
    const docRef = doc(db, "horoscope", "daily");
    const docSnap = await getDoc(docRef);
    let content;
    if (docSnap.exists()) {
      content = docSnap.data()
    } 
      return (
       <RenderUI data={content} sign={q}/>
      );
    }