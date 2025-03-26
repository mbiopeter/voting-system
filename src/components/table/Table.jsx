import React, { useState } from "react";

const Table = ({ columns, rows }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const filteredRows = rows.filter(row =>
        columns.some(col =>
        row[col]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
    const displayedRows = filteredRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <div className="overflow-x-auto p-4">
        <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
            <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                {columns.map((col, index) => (
                <th key={index} className="py-3 px-6 text-left border-b border-gray-200">
                    {col}
                </th>
                ))}
            </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
            {displayedRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-50 transition">
                {columns.map((col, colIndex) => (
                    <td key={colIndex} className="py-3 px-6 border-b border-gray-200">
                    {row[col] || "-"}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
            <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            >
            Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            >
            Next
            </button>
        </div>
        </div>
    );
};

export default Table;