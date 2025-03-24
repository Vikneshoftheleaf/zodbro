export default function RenderUI({data, sign})
{
   return(
    <div className="p-4">
      <h1 className="text-4xl font-bold">{sign.charAt(0).toUpperCase() + sign.slice(1)}</h1>
     
      <p className="mt-2">
      {data[sign]}
      </p>
    </div>
   )
}