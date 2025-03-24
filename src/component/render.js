export default function RenderUI({data, sign})
{
   return(
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">{sign.charAt(0).toUpperCase() + sign.slice(1)}</h1>
     <hr className=""/>
      <p className="mt-2 leading-loose tracking-wide">
      {data[sign]}
      </p>
    </div>
   )
}