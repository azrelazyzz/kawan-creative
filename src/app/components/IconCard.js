// components/IconCard.js

import Image from "next/image";

const IconCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            {icon && (
                <div className="mb-4">
                    <Image src={icon} alt={title} width={40} height={40} />
                </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default IconCard;
