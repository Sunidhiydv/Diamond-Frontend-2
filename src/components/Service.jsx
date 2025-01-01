import React from 'react';

export default function Service() {
  return (
    <>
      <section className="py-10 bg-gray-100" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Diamond Cutting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://i.etsystatic.com/27201740/r/il/8744c1/3100622054/il_1140xN.3100622054_q3jw.jpg" alt="Diamond Cutting" className="mx-auto h-64 " />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-purple-800 mb-2">Diamond Cutting</h3>
                <p className="text-gray-600 text-base">Our precision diamond cutting services ensure flawless results, enhancing the brilliance and value of each diamond through state-of-the-art technology and craftsmanship.</p>
              </div>
            </div>

            {/* Polishing and Finishing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://img1.exportersindia.com/product_images/bc-full/dir_149/4450841/finished-diamond-1486453919-2714072.png" alt="Polishing and Finishing" className=" h-64 mx-auto " />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-purple-800 mb-2">Polishing and Finishing</h3>
                <p className="text-gray-600 text-base">We provide exceptional polishing services to ensure diamonds achieve their highest brilliance, meeting global quality standards and exceeding customer expectations.</p>
              </div>
            </div>

            {/* Custom Design Services */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://th.bing.com/th/id/OIP.4aNkLe9pRICK1OV2TNNDTgAAAA?rs=1&pid=ImgDetMain" alt="Custom Design Services" className="mx-auto h-64 " />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-purple-800 mb-2">Custom Design Services</h3>
                <p className="text-gray-600 text-base">Our team specializes in crafting custom diamond designs tailored to your specifications, blending innovation with timeless elegance for unique creations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
