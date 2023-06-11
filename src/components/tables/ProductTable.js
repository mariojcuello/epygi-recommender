const ProductTable = ({ product }) => { 
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Default IP Lines
                        </th>
                        <td class="px-6 py-4">
                            Maximum IP Lines
                        </td>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Maximum IP Lines
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                       
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Concurrent Calls
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default ProductTable