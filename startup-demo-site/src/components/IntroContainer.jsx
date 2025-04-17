import ScrollTextReveal from './ScrollTriggerTextReveal';

const IntroContainer = () => {
    return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16">
        <div className="lg:w-1/4 mb-8">
        <ScrollTextReveal className="text-3xl font-semibold leading-snug" text="We proudly boast a diverse team of 200+ SMEs each with extensive experience and in-depth knowledge in their respective fields." />

        </div>
        <div className="lg:w-2/4">
            <ScrollTextReveal className="text-md leading-relaxed" text="
                These experts bring decades of hands-on experience and industry insights, ensuring that we deliver solutions tailored to meet the specific needs of our clients. Our SMEs are actively involved in every stage of the project lifecycle, from consultation and strategy to execution and optimization. We have access to 3000+ consultants across the globe through our partner eco-system.
            "/>
            <ScrollTextReveal className="text-md leading-relaxed mt-4" text="
                Our SMEs don't just offer theoretical knowledge they deliver real, measurable results. In fact, 60% of our clients report achieving significant performance improvements within six months of working with our experts. Whether it's navigating complex technical challenges or developing innovative strategies, our team is here to ensure your success.
                "/>
        </div>
    </div>
</div>

    );
};


export default IntroContainer;