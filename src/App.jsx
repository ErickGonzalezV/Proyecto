import { useState } from 'react';

function App() {
  const [ventasDiarias, setVentasDiarias] = useState(8);
  const [productoSeleccionado, setProductoSeleccionado] = useState('combo');

  const productos = {
    nachos: { nombre: 'Nachos con queso', precio: 50, costo: 15, ganancia: 35 },
    esquites: { nombre: 'Esquites preparados', precio: 40, costo: 10, ganancia: 30 },
    postre: { nombre: 'Postre en vaso', precio: 45, costo: 12, ganancia: 33 },
    combo: { nombre: 'Combo nachos + soda', precio: 70, costo: 25, ganancia: 45 }
  };

  const calcularProyeccion = (ventasPorDia) => {
    const producto = productos[productoSeleccionado];
    const ventasDiarias = producto.precio * ventasPorDia;
    const gananciasDiarias = producto.ganancia * ventasPorDia;
    const diasPorMes = 30;
    
    return {
      ventasMensuales: ventasDiarias * diasPorMes,
      gananciasMensuales: gananciasDiarias * diasPorMes,
      alcanzaMeta: gananciasDiarias >= 367 // Meta mínima diaria
    };
  };

  return (
    <div className="min-h-screen bg-secondary">
      <nav className="bg-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between py-4 md:h-16">
            <div className="flex justify-center md:justify-start items-center">
              <h1 className="text-3xl font-display font-bold text-secondary italic">La Vasera</h1>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-2 md:space-x-6 mt-4 md:mt-0">
              <a href="#productos" className="text-secondary hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-200">Productos</a>
              <a href="#menu" className="text-secondary hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-200">Menú</a>
              <a href="#calculos" className="text-secondary hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-200">Cálculos</a>
              <a href="#estudio" className="text-secondary hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-200">Estudio de Mercado</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 md:py-12 px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
        <div id="productos" className="bg-white shadow-xl rounded-lg p-8 border-t-4 border-primary">
          <h2 className="text-3xl font-display font-bold text-brown-dark mb-6">Sabores que caben en un vaso</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0 shadow-md rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                <thead>
                  <tr className="bg-primary/10">
                    <th scope="col" className="sticky top-0 z-10 px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                    <th scope="col" className="sticky top-0 z-10 px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                    <th scope="col" className="sticky top-0 z-10 px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Costo</th>
                    <th scope="col" className="sticky top-0 z-10 px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ganancia</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Doritos</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$25.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$18.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">$7.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Sabritas</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$20.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$15.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">$5.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Nachos con queso</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$50.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$15.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">$35.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Esquites preparados</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$40.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$10.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">$30.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Postre en vaso</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$45.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$12.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">$33.00</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Combo nachos + soda</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$70.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-gray-900">$25.00</td>
                    <td className="px-3 sm:px-6 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">$45.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="calculos" className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Análisis Financiero</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inversión y Gastos</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><span className="font-medium">Inversión inicial:</span> $15,000 pesos</li>
                  <li><span className="font-medium">Gastos fijos mensuales:</span> $6,000 pesos</li>
                  <li className="text-sm text-gray-500">(Incluye renta, insumos, luz y apps)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Metas Diarias</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><span className="font-medium">Recuperación de inversión:</span> $167/día</li>
                  <li><span className="font-medium">Gastos fijos:</span> $200/día</li>
                  <li><span className="font-medium">Total mínimo:</span> $367/día</li>
                  <li><span className="font-medium">Meta ideal:</span> $400-600/día</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calculadora de Ventas</h3>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selecciona un producto
                  </label>
                  <select
                    value={productoSeleccionado}
                    onChange={(e) => setProductoSeleccionado(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  >
                    {Object.entries(productos).map(([key, producto]) => (
                      <option key={key} value={key}>{producto.nombre} - ${producto.precio}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ventas diarias estimadas: {ventasDiarias}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={ventasDiarias}
                    onChange={(e) => setVentasDiarias(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 venta</span>
                    <span>20 ventas</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Proyección Diaria</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-500">Ventas</p>
                        <p className="text-lg font-semibold text-primary">
                          ${(productos[productoSeleccionado].precio * ventasDiarias).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ganancias</p>
                        <p className="text-lg font-semibold text-green-600">
                          ${(productos[productoSeleccionado].ganancia * ventasDiarias).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Proyección Mensual</h4>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-500">Ventas</p>
                        <p className="text-lg font-semibold text-primary">
                          ${(productos[productoSeleccionado].precio * ventasDiarias * 30).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ganancias</p>
                        <p className="text-lg font-semibold text-green-600">
                          ${(productos[productoSeleccionado].ganancia * ventasDiarias * 30).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {calcularProyeccion(ventasDiarias).alcanzaMeta ? 
                        "✅ ¡Excelente! Con estas ventas alcanzarás la meta mínima diaria de $367." :
                        "⚠️ Necesitas aumentar las ventas o considerar productos con mayor margen para alcanzar la meta mínima diaria de $367."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="menu" className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Menú</h2>
          <div className="flex justify-center">
            <img
              src="/menu-la-vasera.png"
              alt="Menú La Vasera"
              className="max-w-full md:max-w-2xl w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="/menu-la-vasera.png"
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Descargar Menú
            </a>
          </div>
        </div>

        <div id="estudio" className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Estudio de Mercado</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Aquí encontrarás nuestro detallado estudio de mercado que incluye:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Análisis de la competencia</li>
              <li>Estudio demográfico de la zona</li>
              <li>Proyecciones financieras</li>
              <li>Estrategias de marketing</li>
            </ul>
            <div className="flex justify-center mt-8">
              <a
                href="/estudio-mercado.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Ver Estudio de Mercado
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
