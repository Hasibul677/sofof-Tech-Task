import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ProductsList() {
    const dispatch = useDispatch();
    const { items: products, status, error } = useSelector(state => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="p-4 text-red-500">
                Error: {error}
                <button
                    onClick={() => dispatch(fetchProducts())}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className='max-w-[712px] mx-auto pb-28 pt-8'>
            <div className='flex items-center gap-4 justify-between mb-5'>
                <div className='flex items-center gap-4'>
                    <Link to="/">
                        <button className="flex items-center justify-center size-10 rounded-full text-4xl font-bold shadow p-5">
                            &lt;
                        </button></Link>
                    <p className='text-[40px]'>Mecca mosques most needed</p>
                </div>
                <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow">
                    <CurrencyDollarIcon className="h-5 w-5" />
                    <span className="font-medium">SAR</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>
            </div>
            <button className='mb-5 bg-black text-white rounded-xl px-3 py-2'>Providing Water</button>

            {products.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    No products available
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {products.map(product => (
                        <Link to={`/product-details/${product.id}`}>
                            <div key={product.id} className='bg-indigo-100 rounded-lg p-4 text-center'>
                                <img className='mb-4 h-[100px] w-full object-cover' src='./food.jpg' alt='img' />
                                <p className='text-xl'>{product.name}</p>
                                <p className='text-sm text-gray-600'>{product.size}</p>
                                <p className='text-2xl'>{product.price}</p>
                                <button className='rounded-full bg-gray-700 text-white p-1 flex justify-center items-center w-full mt-2'>Add to Cart</button>
                            </div>

                        </Link>
                    ))}

                </div>
            )}
        </div>
    );
}