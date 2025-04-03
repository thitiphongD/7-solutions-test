"use client";
import React, { useState, useEffect } from 'react'
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

    const handleItemClick = (item: ProductType) => {
        setItems(prev => prev.filter(i => !(i.name === item.name && i.type === item.type)));
        if (item.type === "Fruit" || item.type === "Vegetable") {
            setSelectItems(prev => ({
                ...prev,
                [item.type]: [...prev[item.type], item],
            }));
        }
    };

    const handleCategoryClick = (category: CategoryType) => {
        if (selectItems[category].length > 0) {
            const itemToMove = selectItems[category][0];
            setItems(prev => [...prev, itemToMove]);
            setSelectItems(prev => ({
                ...prev,
                [category]: prev[category].slice(1)
            }));
        }
    }

    const timerAutoDelete = (item: ProductType, type: CategoryType, index: number): NodeJS.Timeout => {
        return setTimeout(() => {
            setItems(prev => [...prev, item]);
            setSelectItems(prev => ({
                ...prev,
                [type]: prev[type].filter((_, i) => i !== index)
            }));
        }, 5000);
    };

    useEffect(() => {
        const fruitTimers: NodeJS.Timeout[] = [];
        const vegetableTimers: NodeJS.Timeout[] = [];


        selectItems.Fruit.forEach((item, index) => {
            const timer = timerAutoDelete(item, "Fruit", index);
            fruitTimers.push(timer);
        });

        selectItems.Vegetable.forEach((item, index) => {
            const timer = timerAutoDelete(item, "Vegetable", index);
            vegetableTimers.push(timer);
        });

        return () => {
            fruitTimers.forEach(timer => clearTimeout(timer));
            vegetableTimers.forEach(timer => clearTimeout(timer));
        };
    }, [selectItems]);

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
                                onClick={() => handleItemClick(item)}
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
                onClick={() => handleCategoryClick("Vegetable")}
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
                onClick={() => handleCategoryClick("Fruit")}
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