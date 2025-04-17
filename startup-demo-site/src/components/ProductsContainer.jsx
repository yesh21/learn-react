import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductsCard = () => {
    return (
        <div class="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <img alt="Icon of a gear with technology elements" class="mb-4" src="https://placehold.co/64x64"/>
        <h2 class="text-xl font-semibold mb-2">
         Enterprise Solutions
        </h2>
        <p class="text-gray-600">
         Provides customized software and technology solutions that streamline business operations, enhance productivity, and support scalability.
        </p>
       </div>
    );
};


const ProductsTitle = () => {
    return (
<div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
        <div>
            <p class="text-sm text-blue-500 uppercase tracking-widest">Our Specialization</p>
            <hr class="border-t border-gray-300 mt-2"/>
        </div>
        <div class="flex items-center space-x-2">
            <a href="#" class="text-sm text-gray-600">View all services</a>
            <div class="bg-blue-100 p-4 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-600 -rotate-45" />
            </div>
        </div>
    </div>
    <h1 class="text-4xl font-bold mt-4">What We Offer</h1>
</div>
    );
};


const ProductsContainer = () => {
    return (
    <div>
        <ProductsTitle/>
        <div class="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4">
            <ProductsCard/>
            <ProductsCard/>
            <ProductsCard/>
        </div>
   </div>
    );
};


export default ProductsContainer;