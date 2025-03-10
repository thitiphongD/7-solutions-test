'use server';
import React from 'react'
import { getUsers } from '@/services/user';
import { SeparatorLine } from './Seperator';
import DepartmentCard from './DepartmentCard';
const SummaryDepartment = async () => {
    const data = await getUsers();

    return (
        <div className='mb-10 space-y-2'>
            <h1 className="text-xl font-light tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                <span className="block">Create data from API</span>
            </h1>
            <span className='text-lg text-gray-600 font-light'>Summary Department</span>
            <SeparatorLine />
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Object.entries(data).map((departmentData) => (
                    <DepartmentCard
                        key={departmentData[0]}
                        departmentData={departmentData}
                    />
                ))}
            </div>
        </div>
    );
};

export default SummaryDepartment;