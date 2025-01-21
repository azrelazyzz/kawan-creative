const Card = ({ heading, subheading, image, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col h-full">
            {heading && <h3 className="text-xl font-semibold mb-2">{heading}</h3>}
            {subheading && <h4 className="text-lg text-gray-600 mb-4">{subheading}</h4>}

            {image && (
                <div className="w-full h-48 mb-4 overflow-hidden">
                    <img
                        src={image}
                        alt={heading}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {description && <p className="text-lg flex-grow">{description}</p>}
        </div>
    );
};

export default Card;
