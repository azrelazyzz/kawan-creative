const TestimonialCard = ({ name, position, quote, image }) => {
    return (
        <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 h-full">
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-full mb-4"
                />
            )}
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-gray-800">{position}</p>
            <p className="mt-4 text-gray-800 line-clamp-3">{quote}</p>
        </div>
    );
};

export default TestimonialCard