export default function MenuCard({ item, onOpen }) {
    return(
        <div className="menu-card" onClick={() => onOpen(item)}>
        <div className="menu-card-img">{item.emoji}</div>
        <div className="menu-card-body">
        <div className="menu-card-name">{item.name}</div>
        <div className="menu-card-sub">{item.cat}</div>
        <div className="menu-card-row">
          <div className="menu-card-price">£{item.price.toFixed(2)}</div>
          <div className="menu-card-add">+</div>
        </div>
      </div>
    </div>
    );
}