import { DepartmentStats } from "../type/type";
import HairColorBagde from "./HairBadge";

const DepartmentCard = ({
    departmentData
}: {
    departmentData: [string, DepartmentStats]
}) => {
    const [name, stats] = departmentData;
    const { male, female, ageRange, hair, addressUser } = stats;
    const totalEmployees = male + female;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{name}</h3>
                <div className="mt-2 flex items-baseline">
                    <p className="text-3xl font-semibold text-gray-900">{totalEmployees}</p>
                    <p className="ml-2 text-sm text-gray-600">employees</p>
                </div>

                <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Gender Counts</p>
                    <div className="mt-1 flex gap-3">
                        <div className="flex items-center">
                            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1.5"></span>
                            <span className="text-sm text-gray-700">Male: {male}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="inline-block w-3 h-3 rounded-full bg-pink-500 mr-1.5"></span>
                            <span className="text-sm text-gray-700">Female: {female}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Age Range</p>
                    <p className="mt-1 text-sm text-gray-900">{ageRange} years</p>
                </div>

                <HairColorBagde hair={hair} />

                <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Employees</p>
                    <div className="mt-1 max-h-32 overflow-y-auto">
                        {Object.entries(addressUser).map(([name, postal]) => (
                            <div key={name} className="flex justify-between text-sm">
                                <span className="text-gray-800">{name}</span>
                                <span className="text-gray-500">{postal}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentCard;