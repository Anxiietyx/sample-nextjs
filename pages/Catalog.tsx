import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  slug: string;
  image: string; // 1. Added image property to the interface
}

const PRODUCTS: Product[] = [
 // { id: 1, name: 'Midea Chione Inverter / MSCH-10CRFN8-ID', brand: 'Midea', price: '950 - 2780', slug: 'Midea-Chione', image: '/Chione/Chione.png' },
  { id: 2, name: 'Daikin FTKE Inverter Series / FTKE25A', brand: 'Daikin', price: '1540 - 3420', slug: 'Daikin-FTKE25A', image: '/Daikin-FTKE25A/Daikin-FTKE25A.png' },
  { id: 3, name: 'Haier Non-Inverter Series / HSU-10LPA23', brand: 'Haier', price: '1150 - 2660', slug: 'Haier-HSU-10LPA23', image: '/Haier-HSU-10LPA23/Haier-non-inverter.png' },
  { id: 4, name: 'Acson Water Heater (Non-Pump) ASH38A / (DC Pump) ASH38AP', brand: 'ACSON', price: '300 and 500', slug: 'ACSONHeater', image: '/ACSONHeater/ACSONHeater.jpeg' },
  { id: 5, name: 'Midea Portable Air Conditioner', brand: 'Midea', price: '799 - 1399', slug: 'Midea-MPPA-08CRN7', image: '/Midea-MPPA-08CRN7/Midea-MPPA-08CRN7.png' },
  { id: 6, name: 'Panasonic X-Deluxe Inverter KU Series (AKH-1) / CS-KU9AKH-1', brand: 'Panasonic', price: '1890 - 4400', slug: 'Pana-CS-KU9AKH-1', image: '/Pana-CS-KU9AKH-1/Pana-CS-KU9AKH-1.png' },
  { id: 8, name: 'Daikin FTKF Prime Inverter Series / FTKF25B', brand: 'Daikin', price: '1800 - 3750', slug: 'Daikin-FTKF25B', image: '/Daikin-FTKF25B/Daikin-FTKF25B.jpeg' },
  { id: 9, name: 'Daikin FTKP Prime Inverter Series / FTKP28A', brand: 'Daikin', price: '2160 - 4130', slug: 'Daikin-FTKP28A', image: '/Daikin-FTKP28A/Daikin-FTKP28A.jpeg' },
  { id: 10, name: 'Daikin FTV Non-Inverter Series / FTV28PB', brand: 'Daikin', price: '1480 - 3150', slug: 'Daikin-FTV28PB', image: '/Daikin-FTV28PB/Daikin-FTV28PB.jpeg' },
  { id: 11, name: 'Panasonic Eco Inverter YU Series (AKH-1) / CS-YU9AKH-1', brand: 'Panasonic', price: '1310 - 3850', slug: 'Pana-CS-YU9AKH-1', image: '/Pana-CS-YU9AKH-1/Pana-CS-YU9AKH-1.png' },
  { id: 12, name: 'Panasonic Standard Non-Inverter / PN9WKH-1', brand: 'Panasonic', price: '1320 - 3750', slug: 'Pana-PN9WKH-1', image: '/Pana-PN9WKH-1/Pana-PN9WKH-1.png' },
  { id: 13, name: 'Panasonic Standard Inverter PU Series (AKH)/ CS-PU9AKH-1', brand: 'Panasonic', price: '1910 - 3450', slug: 'Pana-CS-PU9AKH-1', image: '/Pana-CS-PU9AKH-1/Pana-PU-9AKH.jpeg' },
  { id: 14, name: 'Midea Celest Inverter / MSCE-10CRFN8-ID', brand: 'Midea', price: '1200 - 2580', slug: 'Midea-Celest', image: '/Midea-Celest/Midea-Celest.jpeg' },

];

const BRANDS = ['Midea', 'Daikin', 'Panasonic', 'Haier', 'ACSON']; 

export default function ProductCatalog() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [isBrandsOpen, setIsBrandsOpen] = useState<boolean>(true);

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(prev => (prev === brand ? null : brand));
  };

  const filteredProducts = PRODUCTS.filter(product => {
    if (!selectedBrand) return true;
    return product.brand === selectedBrand;
  });

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto flex gap-8">
        
        {/* Filter Sidebar */}
        <aside className="w-64 bg-gray-200 p-6 h-fit">
          <h2 className="text-xl font-bold text-black mb-6">Filter</h2>
          
          <div className="border-t border-gray-400 pt-4">
            <button
              onClick={() => setIsBrandsOpen(!isBrandsOpen)}
              className="w-full flex items-center justify-between text-black font-medium focus:outline-none"
            >
              <span>Brands</span>
              {isBrandsOpen ? (
                <ChevronUp className="w-5 h-5 text-black" />
              ) : (
                <ChevronDown className="w-5 h-5 text-black" />
              )}
            </button>

            {isBrandsOpen && (
              <div className="mt-4 space-y-2">
                {BRANDS.map(brand => {
                  const isSelected = selectedBrand === brand;
                  return (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        isSelected
                          ? 'bg-black text-white font-medium'
                          : 'text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {brand}
                    </button>
                  );
                })}
                {selectedBrand && (
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="w-full text-left px-3 py-1 text-xs text-gray-500 hover:underline"
                  >
                    Clear brand filter
                  </button>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Link 
                key={product.id} 
                href={`/Products/${product.slug}`}
                className="bg-gray-200 flex flex-col group hover:shadow-lg transition-all overflow-hidden rounded-lg"
              >
                {/* 3. Replaced placeholder with Next.js Image component */}
                <div className="w-full h-64 relative bg-gray-300">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col gap-1">
                  <h3 className="text-black font-bold text-lg group-hover:underline">
                    {product.name}
                  </h3>
                  <div className="text-amber-500 font-bold text-lg leading-tight">
                    From Rm<br />{product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No products found for the selected filter.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}