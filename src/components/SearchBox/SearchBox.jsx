import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setName } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(setName(event.target.value));
  };
  return (
    <div className={css.container}>
      <span>Find contacts by name</span>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
