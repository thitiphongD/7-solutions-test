import React, { useEffect, useRef } from "react";
import { ProductType } from "../type/type";

interface Props {
    item: ProductType;
}

const ProductItem = ({ item }: Props) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const delay = 200;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("animate-bounce-in");
                            entry.target.classList.remove("opacity-0");
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`list-item opacity-0 p-4 mb-3 ${item.type === "Fruit" ? "fruit" : "vegetable"
                }`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${item.type === "Fruit"
                            ? "bg-orange-100 text-orange-500"
                            : "bg-green-100 text-green-500"
                            }`}
                    >
                        {item.type === "Fruit" ? "🍎" : "🥦"}
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                            {item.type}
                        </p>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
