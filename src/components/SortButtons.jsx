function SortButtons({ onSort }) {
    return (
        <div className="flex justify-center gap-4">
            <button
                onClick={() => onSort("asc")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Population ↑
            </button>
            <button
                onClick={() => onSort("desc")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
                Population ↓
            </button>
        </div>
    );
}

export default SortButtons;
