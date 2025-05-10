import { serviceDetails } from "@/data/serviceDetails";
import Image from "next/image";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) return <div>Xizmat topilmadi</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 text-white bg-[#1a1325] min-h-screen">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <ul className="space-y-2">
          {service.features.map((f, i) => (
            <li key={i}>
              <span className="font-semibold">☑ {f.title}:</span> {f.description}
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm space-y-1">
          <p><b>Texnik vazifa:</b> {service.details.texnik}</p>
          <p><b>Sahifalar soni:</b> {service.details.sahifaSoni}</p>
          <p><b>Veb dizayn:</b> {service.details.dizayn}</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-white text-black rounded">Buyurtma berish</button>
      </div>
      <div>
        <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
