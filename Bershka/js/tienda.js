const cargarTienda = async () => {
    const contenedor = document.getElementById('contenedor-productos');

    try {
        
        const respuesta = await fetch("/public/data/productos.json"); 
        const datos = await respuesta.json();

        
        contenedor.innerHTML = '';

        
        datos.forEach(producto => {
            
            contenedor.innerHTML += `
                <div class="p-8 border rounded-lg hover:border-blue-500 transition-colors bg-[#111] border-gray-700">
                    
                    <div class="relative overflow-hidden rounded-lg h-64 mb-4 bg-white">
                        <img src="${producto.image}" 
                             alt="${producto.nombre}" 
                             class="object-contain w-full h-full transition-transform hover:scale-110"
                             onerror="this.src='https://placehold.co/400?text=No+Image'">
                    </div>

                    <div class="flex flex-col justify-between">
                        <h1 class="font-bold text-white uppercase text-sm line-clamp-1 mb-1">
                            ${producto.nombre}
                        </h1>
                        <p class="text-xl font-bold text-white">
                            $${producto.precio}
                        </p>
                        <button class="w-full bg-white text-black font-bold py-2 mt-4 hover:bg-gray-200">
                            AÑADIR
                        </button>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        
        console.log("Error", error);
        contenedor.innerHTML = `
            <p class="text-red-700 text-center col-span-full text-xl font-bold">
                Vaya, algo salió mal al cargar los productos.
            </p>
        `;
    }
};


cargarTienda();

