import NavHeader from '../components/NavHeader';
import CategoryStrip from '../components/CategoryStrip';
import MenuCard from '../components/MenuCard';

export default function MenuScreen({
  categories,
  currentCategory,
  onSelectCategory,
  items,
  onBack,
  cartCount,
  onCartClick,
  onOpenItem,
}) {
  return (
    <div className="screen active" id="screen-menu">
      <NavHeader
        title="Our Menu"
        onBack={onBack}
        cartCount={cartCount}
        onCartClick={onCartClick}
      />

      <CategoryStrip
        categories={categories}
        currentCategory={currentCategory}
        onSelectCategory={onSelectCategory}
      />

      <div className="menu-grid">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} onOpen={onOpenItem} />
        ))}
      </div>
    </div>
  );
}