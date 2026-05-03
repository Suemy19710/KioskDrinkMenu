import NavHeader from '../components/NavHeader';
import OptionChips from '../components/OptionChips';

export default function ItemScreen({
  item,
  options,
  quantity,
  onBack,
  cartCount,
  onCartClick,
  onChangeOption,
  onChangeQty,
  onAddToCart,
}) {
  if (!item) return null;

  return (
    <div className="screen active" id="screen-item">
      <NavHeader
        title={item.name}
        onBack={onBack}
        cartCount={cartCount}
        onCartClick={onCartClick}
      />

      <div className="item-detail-body">
        <div className="item-left">
          <span className="item-emoji">{item.emoji}</span>
          <div className="item-name-big">{item.name}</div>
          <div className="item-desc-big">{item.desc}</div>
          <div className="item-price-big">£{item.price.toFixed(2)}</div>
        </div>

        <div className="item-right">
          <div>
            <div className="option-group-label">Size</div>
            <OptionChips
              options={['Small', 'Regular', 'Large']}
              selected={options.size}
              onSelect={(value) => onChangeOption('size', value)}
            />
          </div>

          {item.hasMilk && (
            <div>
              <div className="option-group-label">Milk</div>
              <OptionChips
                options={['Full Fat', 'Oat', 'Almond', 'Soy', 'Skimmed']}
                selected={options.milk}
                onSelect={(value) => onChangeOption('milk', value)}
              />
            </div>
          )}

          {item.hasTemp && (
            <div>
              <div className="option-group-label">Temperature</div>
              <OptionChips
                options={['Hot', 'Iced']}
                selected={options.temp}
                onSelect={(value) => onChangeOption('temp', value)}
              />
            </div>
          )}

          {item.hasStrength && (
            <div>
              <div className="option-group-label">Strength</div>
              <OptionChips
                options={['Single', 'Double', 'Triple']}
                selected={options.strength}
                onSelect={(value) => onChangeOption('strength', value)}
              />
            </div>
          )}

          <div>
            <div className="option-group-label">Quantity</div>
            <div className="qty-control">
              <div className="qty-btn" onClick={() => onChangeQty(-1)}>−</div>
              <div className="qty-num">{quantity}</div>
              <div className="qty-btn" onClick={() => onChangeQty(1)}>+</div>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={onAddToCart}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}