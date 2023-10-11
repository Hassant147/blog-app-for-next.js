
export default function InstagramSection() {
    // This array holds the image variables for the 6 images. You can import and replace them as needed.
    const images = [
        '/Media/instagramSection/Rectangle 57.png', 
        '/Media/instagramSection/Rectangle 58.png', 
        '/Media/instagramSection/Rectangle 59.png', 
        '/Media/instagramSection/Rectangle 60.png', 
        '/Media/instagramSection/Rectangle 61.png', 
        '/Media/instagramSection/Rectangle 62.png'
    ];
    return (
        <div className="bg-gray-100 py-10" style={{display: 'none'}}>
            <div className="w-4/5 mx-auto">
                {/* Section Title */}
                <div className="text-left text-black text-3xl font-bold font-['Metropolis'] mb-8">Instagram</div>

                {/* Instagram Details */}
                <div className="flex items-center mb-6">
                   {/* Instagram Logo */}
                    <div className="w-20 h-20 bg-neutral-700 rounded-full mr-6 flex items-center justify-center">
                        <img src="/Media/instagramSection/insta.png" alt="Instagram Logo" className="w-9 h-9"/>
                    </div>

                    {/* Instagram Account Details */}
                    <div>
                        <div className="text-black text-xs font-medium font-['Metropolis'] uppercase">James smith</div>
                        <div className="text-zinc-400 text-xs font-medium font-['Metropolis'] lowercase">January 24, 2023 -  4 min read</div>
                    </div>
                </div>

                {/* Images */}
                <div className="flex space-x-6 overflow-x-auto pb-4">
                    {images.map((img, idx) => (
                        <img key={idx} className="w-48 h-48 rounded-2xl" src={img} alt={`Instagram Image ${idx + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

