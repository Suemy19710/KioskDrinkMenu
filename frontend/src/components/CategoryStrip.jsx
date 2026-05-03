export default function CategoryStrip({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="category-strip">
            {categories.map(cat => (
                <div
                    key={cat}
                    className={`category-item ${selectedCategory === cat ? 'selected' : ''}`}
                    onClick={() => onSelectCategory(cat)}
                >
                    {cat}
                </div>
            ))}
        </div>  
    )
}