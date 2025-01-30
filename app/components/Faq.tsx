// components/Faq.tsx
// ... other imports and interfaces remain the same

const Faq = ({ faqs }: FaqProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-gradient-to-b from-zinc-900 to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="relative">
                            <div
                                className={`
                                    relative border rounded-lg overflow-hidden 
                                    ${openIndex === index 
                                        ? 'border-transparent bg-gradient-to-r from-purple-600/20 to-pink-600/20' 
                                        : 'border-zinc-700 bg-zinc-800/30'
                                    }
                                    backdrop-blur-sm transition-all duration-300
                                `}
                            >
                                {/* Animated border */}
                                {openIndex === index && (
                                    <div className="absolute inset-0 rounded-lg">
                                        <div className="absolute inset-px bg-zinc-900 rounded-lg z-0" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg animate-border" />
                                    </div>
                                )}
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <button
                                        className="w-full px-6 py-4 text-left flex justify-between items-center"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="text-lg font-medium text-white">
                                            {faq.question}
                                        </span>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-zinc-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-zinc-400" />
                                        )}
                                    </button>
                                    <div
                                        className={`px-6 transition-all duration-300 ease-in-out ${
                                            openIndex === index
                                                ? 'max-h-96 py-4 opacity-100'
                                                : 'max-h-0 py-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-zinc-300">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;