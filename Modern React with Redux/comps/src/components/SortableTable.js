import { useState } from 'react';
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go';
import Table from './Table';

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label) => {
        // CHANGING SORT LABEL
        if (sortBy && sortBy !== label) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        // SORT ORDER CICLE
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    // SORTING
    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);

        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
            // STRING
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            // NUMBER
            return (valueA - valueB) * reverseOrder;
        });
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        };
    });

    // ADD DATA & CONFIG AFTER PROPS TO OVERWRITE CONFIG INSIDE PROPS
    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
    // BOTH ARROWS
    if (label !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    }
}

export default SortableTable;
