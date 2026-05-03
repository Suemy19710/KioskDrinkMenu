export default function OptionChips({options, selected, onSelect}){
    return(
        <div className="option-chips">
            {options.map(opt => (
                <div
                    key={opt}
                    className={`option-chip ${selected === opt ? 'selected' : ''}`}
                    onClick={() => onSelect(opt)}
                >
                    {opt}
                </div>
            ))}
        </div>  

    );
}