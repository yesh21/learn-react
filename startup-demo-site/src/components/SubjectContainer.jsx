const SubjectContainer = () => {
    return (
        <div>
        <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center">
     <div className="w-full lg:w-1/2">
     <div className="relative">

        <img className="w-3/4 object-cover" src="https://placehold.co/600x400" alt="Base image"/>
        
        <img className="absolute bottom-0 left-0 w-1/2 transform translate-x-9/10 translate-y-1/4 shadow-lg rounded-lg border-2 border-white" src="https://placehold.co/600x400" alt="Overlapping image"/>
        </div>
     </div>
     <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
      <h2 className="text-blue-500 text-sm uppercase mb-2">
       Why Us?
      </h2>
      <h1 className="text-4xl font-bold mb-4">
       Customer satisfaction is our driving force.
      </h1>
      <p className="text-gray-700 mb-8">
       We're a pioneer in computer vision technology, developing AI solutions that empower machines to see, understand, and interpret the world around them.
      </p>
      <ul className="space-y-4">
       <li className="flex items-start">
        <span className="text-gray-500 text-lg mr-2">
         01
        </span>
        <span className="text-2xl font-bold">
         Expertize in AI
        </span>
       </li>
       <li className="flex items-start">
        <span className="text-gray-500 text-lg mr-2">
         02
        </span>
        <span className="text-2xl font-bold">
         Comprehensive Solutions
        </span>
       </li>
       <li className="flex items-start">
        <span className="text-gray-500 text-lg mr-2">
         03
        </span>
        <span className="text-2xl font-bold">
         Agile &amp; Innovative
        </span>
       </li>
       <li className="flex items-start">
        <span className="text-gray-500 text-lg mr-2">
         04
        </span>
        <span className="text-2xl font-bold">
         Scalability
        </span>
       </li>
      </ul>
     </div>
    </div>
   </div>
   <PartnersInfo/>
   <ExpertiseList/>
   </div>
   );
};

const PartnersInfo = () => {
    return (
    <div className="text-center py-16 bg-neutral-100">
        <p className="text-lg md:text-xl lg:text-2xl font-light">
        Unlock growth, expand capabilities and deliver unmatched value through with
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold">
        our collaboration with our technology, business, consulting and academic partnerships
        </p>
        <div className="flex flex-wrap md:grid-cols-5 space-y-2 items-center justify-around">
            <img alt="Micro Focus logo" class="h-12 md:h-16 lg:h-20" src="https://placehold.co/100x50?text=Micro+Focus+Logo"/>
            <img alt="IBM logo" class="h-12 md:h-16 lg:h-20" src="https://placehold.co/100x50?text=IBM+Logo"/>
            <img alt="Salesforce logo" class="h-12 md:h-16 lg:h-20" src="https://placehold.co/100x50?text=Salesforce+Logo"/>
            <img alt="AWS logo" class="h-12 md:h-16 lg:h-20" src="https://placehold.co/100x50?text=AWS+Logo"/>
            <img alt="Azure logo" class="h-12 md:h-16 lg:h-20" src="https://placehold.co/100x50?text=Azure+Logo"/>
        </div>
    </div>
   );
};

const ExpertiseTiles = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
        <img alt="Icon representing manufacturing" class="mb-4" src="https://placehold.co/100x100"/>
        <p className="text-lg font-semibold">
         Manufacturing
        </p>
       </div>

    );
};

const ExpertiseList = () => {
    return (
        <div className="container mx-auto py-12">
    <div className="flex flex-col md:flex-row justify-between items-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpertiseTiles/>
        <ExpertiseTiles/>
        <ExpertiseTiles/>
        <ExpertiseTiles/>
        <ExpertiseTiles/>
        <ExpertiseTiles/>
     </div>
     <div className="m-8 md:mt-0 md:ml-8 text-center md:text-left">
      <h2 className="text-4xl font-bold text-blue-500">
       INDUSTRY
      </h2>
      <h3 className="text-4xl font-light text-blue-300">
       EXPERTISE
      </h3>
     </div>
    </div>
   </div>
   );
};



export default SubjectContainer;