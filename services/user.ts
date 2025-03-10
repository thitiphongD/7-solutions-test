"use server";

import { DepartmentStats, User } from "@/app/type/type";


export const getUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    const users: User[] = data.users || [];
    const departmentStats: Record<string, DepartmentStats> = {};

    // Process users by department
    users.forEach((user) => {
        const department = user.company.department;

        // Skip users without department
        if (!department) return;

        // Initialize department stats if not exists
        if (!departmentStats[department]) {
            departmentStats[department] = {
                male: 0,
                female: 0,
                ageRange: "",
                hair: {},
                addressUser: {},
            };
        }

        // Count gender
        if (user.gender.toLowerCase() === "male") {
            departmentStats[department].male += 1;
        } else if (user.gender.toLowerCase() === "female") {
            departmentStats[department].female += 1;
        }

        // Count hair colors
        const hairColor = user.hair.color;
        if (hairColor) {
            departmentStats[department].hair[hairColor] =
                (departmentStats[department].hair[hairColor] || 0) + 1;
        }

        // Add user to addressUser mapping
        const fullName = `${user.firstName}${user.lastName}`;
        departmentStats[department].addressUser[fullName] = user.address.postalCode;
    });

    // Calculate age range for each department
    Object.keys(departmentStats).forEach((department) => {
        const departmentUsers = users.filter(
            (user) => user.company.department === department
        );

        if (departmentUsers.length > 0) {
            const ages = departmentUsers.map((user) => user.age);
            const minAge = Math.min(...ages);
            const maxAge = Math.max(...ages);
            departmentStats[department].ageRange = `${minAge}-${maxAge}`;
        } else {
            departmentStats[department].ageRange = "N/A";
        }
    });

    return departmentStats;
}
