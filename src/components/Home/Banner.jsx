// BannerSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderItems = [
    {
        id: 1,
        image: 'https://img.freepik.com/premium-photo/bottle-water_488220-6796.jpg',
        text: (
            <>
                <p className="text-right font-bold text-lg text-purple-900">نخدم أكثر من 1000</p>
                <p className="text-right text-sm text-gray-600">مسجد في مكة داخل حدود الحرم</p>
            </>
        ),
    },
    {
        id: 2,
        image: 'https://img.freepik.com/premium-photo/bottle-water_488220-6796.jpg',
        text: (
            <p className="text-right font-bold text-lg text-purple-900">نعمل على مدار الأسبوع</p>
        ),
    },
    {
        id: 3,
        image: 'https://img.freepik.com/premium-photo/bottle-water_488220-6796.jpg',
        text: (
            <>
                <p className="text-right font-bold text-lg text-purple-900">نخدم أكثر من 1000</p>
                <p className="text-right text-sm text-gray-600">مسجد في مكة داخل حدود الحرم</p>
            </>
        ),
    },
    {
        id: 4,
        image: 'https://img.freepik.com/premium-photo/bottle-water_488220-6796.jpg',
        text: (
            <>
                <p className="text-right font-bold text-lg text-purple-900">نخدم أكثر من 1000</p>
                <p className="text-right text-sm text-gray-600">مسجد في مكة داخل حدود الحرم</p>
            </>
        ),
    },
    {
        id: 5,
        image: 'https://img.freepik.com/premium-photo/bottle-water_488220-6796.jpg',
        text: (
            <>
                <p className="text-right font-bold text-lg text-purple-900">نخدم أكثر من 1000</p>
                <p className="text-right text-sm text-gray-600">مسجد في مكة داخل حدود الحرم</p>
            </>
        ),
    },
];

function Banner() {
    return (
        <div>
            <div className='mx-auto max-w-[712px] mt-10'>
                <h3 className="text-4xl font-bold py-4">Home</h3>

            </div>
            <div className="relative px-4">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="rounded-xl"
                >
                    {sliderItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white rounded-xl shadow p-2 flex flex-col items-center text-right relative">
                                <img src={item.image} alt="Slide" className="h-32 w-full mb-4" />
                                <div className='absolute lg:left-5 lg:top-9 text-white px-5'>{item.text}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-prev absolute top-1/2 -left-2 transform -translate-y-1/2 z-10 bg-white p-0.5 rounded-full shadow">
                    <ChevronLeftIcon style={{ color: `red !importent` }} className="h-4 w-4 text-gray-400" />
                </div>

                {/* Right Arrow */}
                <div className="swiper-button-next absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 bg-white p-0.5 rounded-full shadow">
                    <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </div>
            </div>
        </div>
    );
}
export default Banner;