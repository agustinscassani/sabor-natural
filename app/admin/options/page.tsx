import { Option, OptionTypes } from '@/app/types/option';
import { saveOption } from '@/app/actions/options';

export default async function Option() {
  // Render
  return (
    <div className="w-full max-w-xs">
      <form action={saveOption} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            placeholder="Nombre"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Descripción"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tipo
          </label>
          <div className="flex items-center mb-4">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="type-1"
              name="type"
              type="radio"
              value={OptionTypes.guarnicion}
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="type-1">{OptionTypes.guarnicion}</label>
          </div>
          <div className="flex items-center">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="type-2"
              name="type"
              type="radio"
              value={OptionTypes.principal}
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="type-2">{OptionTypes.principal}</label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}