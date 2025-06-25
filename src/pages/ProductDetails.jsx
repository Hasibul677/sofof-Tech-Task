import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ProductsList() {
    const dispatch = useDispatch();
    const { items: products, status, error } = useSelector(state => state.products);
    const product = {
        name: "5 Cartons",
        description: "330 ml • 20 bottles",
        price: 50.0,
        image: "/food.jpg",
        overview: "For this items it will be distribute in Haram and Around Haram from 1 Ramadan to 10 Ramadan",
        features: [
            "100% natural spring water source",
            "Advanced multi-stage filtration",
            "BPA-free recyclable packaging",
            "Perfect pH balance (7.0-7.5)",
            "Convenient bulk packaging"
        ],
        similarProducts: [
            { id: 1, name: "5 Cartons", desc: "500 ml • 15 bottles", price: 55.0 },
            { id: 2, name: "3 Cartons", desc: "330 ml • 12 bottles", price: 35.0 }
        ]
    };

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
                    <Link to="/cart">
                    <button className="flex items-center justify-center size-10 rounded-full text-4xl font-bold shadow p-5">
                        &lt;
                    </button></Link>
                    <p className='text-[40px]'>Product Details</p>
                </div>
                <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 text-white shadow">
                    <CurrencyDollarIcon className="h-5 w-5" />
                    <span className="font-medium">SAR</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>
            </div>

            <div className="flex items-center mb-4">
                {/* Product Image */}
                <div className="w-full h-auto bg-gray-100">
                    <img
                        src={product.image}
                        alt="Water bottles package"
                        className="w-full h-full object-cover p-2 rounded-sm"
                    />
                    <div className='grid grid-cols-2'>
                        <img
                            src={product.image}
                            alt="Water bottles package"
                            className="w-full h-full object-cover p-2 rounded-sm"
                        />
                        <img
                            src={product.image}
                            alt="Water bottles package"
                            className="w-full h-full object-cover  p-2 rounded-sm"
                        />
                    </div>
                </div>

                <div className="p-4">
                    {/* Product Header */}
                    <div className="mb-3">
                        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                        <p className="text-lg text-gray-600">{product.description}</p>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold ">${product.price}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className='rounded-full bg-gray-700 text-white p-1 flex justify-center items-center px-12'>Add to Cart</button>

                    {/* Product Overview */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Product Overview</h2>
                        <p className="text-gray-600">{product.overview}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h2>
                        <ul className="space-y-2">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            <div className='flex justify-between mb-3'>
                <p className='text-2xl'>Suggested Similar Products</p>
                <p className='text-2xl'>{"See all >"}</p>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    No products available
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        <div key={product.id} className='bg-indigo-100 rounded-lg p-4 text-center'>
                            <img className='mb-4 h-[100px] w-full object-cover' src='/food.jpg' alt='img' />
                            <p className='text-xl'>{product.name}</p>
                            <p className='text-sm text-gray-600'>{product.size}</p>
                            <p className='text-2xl'>{product.price}</p>
                            <button className='rounded-full bg-gray-700 text-white p-1 flex justify-center items-center w-full mt-2'>Add to Cart</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}