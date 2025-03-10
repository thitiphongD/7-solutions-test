import { ProductType } from "../type/type";

interface Props {
    item: ProductType;
}

const ProductItem = ({ item }: Props) => {
    return (
        <div className={`p-4${item.type === "Fruit" ? "fruit" : "vegetable"}`}
        >
            <div className={`flex items-center justify-between border rounded-lg p-2 ${item.type === "Fruit" ? "border-orange-100" : "border-green-100"} ${item.type === "Fruit" ? "hover:bg-orange-50" : "hover:bg-green-50"}`}>
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
                        <p className={`text-sm uppercase tracking-wider text-gray-500 font-medium ${item.type === "Fruit" ? "text-orange-400" : "text-green-400"}`}>
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
