import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UPWARD, FALLING } from "../../Const/Const";
import { orderByName, getCountries } from "../../Redux/actions/index";

const Filters = ({pages}) => {
  const dispatch = useDispatch();

  const [, setOrder] = useState("");

  // const countries = useSelector((state) => state.countries);

  //Order by Name
  function nameSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    pages(1);
    setOrder(`Ordering ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <select
        onChange={(e) => {
          nameSort(e);
        }}
      >
        <option value={UPWARD}> A-Z </option>
        <option value={FALLING}> Z-A </option>
      </select>
    </div>
  );
};

export default Filters;
