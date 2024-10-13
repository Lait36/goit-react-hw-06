import css from "./SearchBox.module.css"
export default function SearchBox({ value, onChange }) {
    const handleChange = (event) => {
      onChange(event.target.value);
    };
  
    return (
      <div className={css.container}>
        <span>Find contacts by name</span>
        <input type="text" className={css.input} value={value} onChange={handleChange} />
      </div>
    );
  }