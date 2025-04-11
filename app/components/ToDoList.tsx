"use client";
import React, { useState } from 'react'
import { Card } from './Card'
import { CategoryType, ProductType } from '../type/type';
import { products } from '../data/products';
import ProductItem from './ProductItem';

const ToDoList = () => {
    const [items, setItems] = useState<ProductType[]>(products);
    const [selectItems, setSelectItems] = useState<{
        Fruit: ProductType[];
        Vegetable: ProductType[];
    }>({
        Fruit: [],
        Vegetable: [],
    });

    const handleItem = (item: ProductType) => {
        setItems(prev => prev.filter(i => !(i.name === item.name && i.type === item.type)));
        if (item.type === "Fruit" || item.type === "Vegetable") {
            setSelectItems(prev => {
                const newItems = {
                    ...prev,
                    [item.type]: [...prev[item.type], item],
                };

                // Start timer for the newly added item
                const timer = setTimeout(() => {
                    setItems(prevItems => [...prevItems, item]);
                    setSelectItems(prevItems => ({
                        ...prevItems,
                        [item.type]: prevItems[item.type].filter(i => !(i.name === item.name && i.type === item.type))
                    }));
                }, 5000);

                // Store timer ID in the item for cleanup
                return {
                    ...newItems,
                    [item.type]: newItems[item.type].map(i =>
                        i.name === item.name && i.type === item.type
                            ? { ...i, timerId: timer }
                            : i
                    )
                };
            });
        }
    };

    const handleCategory = (category: CategoryType) => {
        if (selectItems[category].length > 0) {
            const itemToMove = selectItems[category][0];

            if (itemToMove.timerId) {
                clearTimeout(itemToMove.timerId);
            }
            setItems(prev => [...prev, itemToMove]);
            setSelectItems(prev => ({
                ...prev,
                [category]: prev[category].slice(1)
            }));
        }
    }

    const allItems = (
        <h2 className="text-xl font-semibold mb-4 text-gray-600 flex items-center">
            All Items
        </h2>
    )

    const titleFruit = (
        <h2 className="text-xl font-semibold mb-4 text-orange-600 flex items-center">
            <span className="mr-2">🍎</span> Fruits
        </h2>
    )

    const titleVegetable = (
        <h2 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
            <span className="mr-2">🥦</span> Vegetables
        </h2>
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card title={allItems}>
                <div className="space-y-1">
                    {items.length === 0 ? (
                        <p className="text-gray-500">No items</p>
                    ) : (
                        items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleItem(item)}
                                className="w-full text-left cursor-pointer"
                                aria-label={`Select ${item.name}`}
                            >
                                <ProductItem
                                    item={item}
                                />
                            </button>
                        ))
                    )}
                </div>
            </Card>
            <Card
                title={titleVegetable}
                className='border-green-200 shadow-md'
                onClick={() => handleCategory("Vegetable")}
            >
                <div className="space-y-1">
                    {selectItems.Vegetable.length === 0 ? (
                        <p className="text-green-500">No vegetables</p>
                    ) : (
                        selectItems.Vegetable.map((item, index) => (
                            <ProductItem key={index} item={item} />
                        ))
                    )}
                </div>
            </Card>
            <Card
                title={titleFruit}
                className='border-orange-200 shadow-md'
                onClick={() => handleCategory("Fruit")}
            >
                <div className="space-y-1">
                    {selectItems.Fruit.length === 0 ? (
                        <p className="text-orange-500">No fruits</p>
                    ) : (
                        selectItems.Fruit.map((item, index) => (
                            <ProductItem key={index} item={item} />
                        ))
                    )}
                </div>
            </Card>
        </div>
    )
}

export default ToDoList