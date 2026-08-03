import  { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string; // base price
  slug: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Midea Chione Inverter / MSCH-10CRFN8-ID', brand: 'Midea', price: '950 - 2780', slug: 'Midea-Chione', image: '/Chione/Chione.png' },
  { id: 2, name: 'Daikin FTKE Inverter Series / FTKE25A', brand: 'Daikin', price: '1540 - 3420', slug: 'Daikin-FTKE25A', image: '/Daikin-FTKE25A/Daikin-FTKE25A.png' },
  { id: 3, name: 'Haier Non-Inverter Series / HSU-10LPA23', brand: 'Haier', price: '1150 - 2660', slug: 'Haier-HSU-10LPA23', image: '/Haier-HSU-10LPA23/Haier-non-inverter.png' },
  { id: 4, name: 'Acson Water Heater (Non-Pump) ASH38A / (DC Pump) ASH38AP', brand: 'ACSON', price: '300 and 500', slug: 'ACSONHeater', image: '/ACSONHeater/ACSONHeater.jpeg' },
  { id: 5, name: 'Midea Portable Air Conditioner', brand: 'Midea', price: '799 - 1399', slug: 'Midea-MPPA-08CRN7', image: '/Midea-MPPA-08CRN7/Midea-MPPA-08CRN7.PNG' },
  { id: 6, name: 'Panasonic X-Deluxe Inverter KU Series (AKH-1) / CS-KU9AKH-1', brand: 'Panasonic', price: '1890 - 4400', slug: 'Pana-CS-KU9AKH-1', image: '/Pana-CS-KU9AKH-1/Pana-CS-KU9AKH-1.png' },
  { id: 8, name: 'Daikin FTKF Prime Inverter Series / FTKF25B', brand: 'Daikin', price: '1800 - 3750', slug: 'Daikin-FTKF25B', image: '/Daikin-FTKF25B/Daikin-FTKF25B.jpeg' },
  { id: 9, name: 'Daikin FTKP Prime Inverter Series / FTKP28A', brand: 'Daikin', price: '2160 - 4130', slug: 'Daikin-FTKP28A', image: '/Daikin-FTKP28A/Daikin-FTKP28A.jpeg' },
  { id: 10, name: 'Daikin FTV Non-Inverter Series / FTV28PB', brand: 'Daikin', price: '1480 - 3150', slug: 'Daikin-FTV28PB', image: '/Daikin-FTV28PB/Daikin-FTV28PB.jpeg' },
  { id: 11, name: 'Panasonic Eco Inverter YU Series (AKH-1) / CS-YU9AKH-1', brand: 'Panasonic', price: '1310 - 3850', slug: 'Pana-CS-YU9AKH-1', image: '/Pana-CS-YU9AKH-1/Pana-CS-YU9AKH-1.png' },
  { id: 12, name: 'Panasonic Standard Non-Inverter / PN9WKH-1', brand: 'Panasonic', price: '1320 - 3750', slug: 'Pana-PN9WKH-1', image: '/Pana-PN9WKH-1/Pana-PN9WKH-1.png' },
  { id: 13, name: 'Panasonic Standard Inverter PU Series (AKH)/ CS-PU9AKH-1', brand: 'Panasonic', price: '1910 - 3450', slug: 'Pana-CS-PU9AKH-1', image: '/Pana-CS-PU9AKH-1/Pana-PU-9AKH.jpeg' },
  { id: 14, name: 'Midea Celest Inverter / MSCE-10CRFN8-ID', brand: 'Midea', price: '900 - 2750', slug: 'Midea-Celest', image: '/Midea-Celest/Midea-Celest.jpeg' },

]
// Updated HP price mapping based on your request
const HP_PRICES: Record<string, number> = {
  '1': 1150,
  '1.5': 1460,
  '2': 2280,
  '2.5': 2660,
};

const featureImages = [
  '/Haier-HSU-10LPA23/HSU-10LPA-Series_Page_1.jpg',
  '/Haier-HSU-10LPA23/HSU-10LPA-Series_Page_2.jpg',
  '/Haier-HSU-10LPA23/HSU-10LPA-Series_Page_3.jpg',
  '/Haier-HSU-10LPA23/HSU-10LPA-Series_Page_4.jpg',
];

export default function ProductDetailPage() {
  const [selectedHp, setSelectedHp] = useState<string>('1');

  // Find the specific product (e.g., Midea Celest Air Conditioner)
  const product = PRODUCTS.find(p => p.id === 4) || PRODUCTS[3];

  // Get the price based on the selected HP
  const currentPrice = HP_PRICES[selectedHp] ?? product.price;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
        
        {/* Product Image & Badges */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 flex flex-col items-center justify-center relative">
          <Image 
            src="/Haier-HSU-10LPA23/Haier-non-inverter.png" 
            alt={product.name} 
            width={650} 
            height={417}
            className="w-full h-auto object-contain max-h-80 max-w-full" 
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-2xl md:text-3xl font-bold text-black">{product.name}</h1>
          
          <div className="text-2xl font-bold text-black">
            RM{currentPrice}
          </div>

          {/* HP Selection Stars/Buttons */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">Select Horsepower (HP):</span>
            <div className="flex gap-4">
              {['1','1.5','2','2.5'].map(hp => (
                <button
                  key={hp}
                  onClick={() => setSelectedHp(hp)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                    selectedHp === hp 
                      ? 'border-yellow-400 bg-yellow-50 text-black shadow-md' 
                      : 'border-gray-300 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  {hp}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Back to Product Catalog
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Pages Display Container */}
      <div className="max-w-5xl mx-auto mt-8 flex flex-col items-center gap-6">
        {featureImages.map((src, index) => (
          <Image 
            key={index}
            src={src} 
            alt={`${product.name} feature page ${index + 1}`} 
            width={800} 
            height={600}
            className="w-full h-auto object-contain max-w-2xl" 
          />
        ))}
      </div>
    </div>
  );
}