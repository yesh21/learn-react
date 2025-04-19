import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductsCard = () => {
    return (
        
        <div class="relative bg-gray-50 group p-8 rounded-lg flex flex-col items-start">
            
            
            <div class="absolute -top-4 -right-4 p-6 bg-white rounded-2xl invisible group-hover:visible">
            <div class="px-3 py-2 border rounded-full hover:bg-blue-300 hover:text-white">

            <FontAwesomeIcon icon={faArrowRight} className="text-gray-600 -rotate-45" />
            </div>
            </div>

        <img alt="Icon of a gear with technology elements" class="mb-4" src="https://placehold.co/64x64"/>
        <h2 class="text-xl font-semibold mb-2">
        Data & AI Engineering
        </h2>
        <p class="text-gray-600">
         Provides customized software and technology solutions that streamline business operations, enhance productivity, and support scalability.
        </p>
       </div>
    );
};


const ProductsTitle = () => {
    return (
<>
    <div>
        <p class="text-sm text-blue-500 uppercase tracking-widest p-4">Our Specialization</p>
    </div>
    <div class="flex justify-between items-center p-4 border-t border-gray-300 border-r">
        <h1 class="text-4xl font-bold mt-4">WHAT WE <span class="text-4xl font-normal mt-4"> OFFER </span></h1>
        <div class="flex items-center space-x-2">
            <a href="#" class="text-sm text-gray-600">View all services</a>
            <div class="bg-blue-100 px-3 py-2 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-600 -rotate-45" />
            </div>
        </div>
    </div>
</>
    );
};


const ProductsContainer = () => {
    return (
    <div class="container mx-auto px-4 py-8">
        <ProductsTitle/>
        <div class="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 p-4">
            <ProductsCard/>
            <ProductsCard/>
            <ProductsCard/>
        </div>
   </div>
    );
};


export default ProductsContainer;