import { useState } from "react";
import Checkbox from "./ui/Checkbox";
import Button from "./ui/Button";
import Divider from "./ui/Divider";

const list = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const CheckList = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const onCheckAll = (checked: boolean) => {
    if (!checked) {
      return setCheckedItems([]);
    }
    setCheckedItems(list.map((item) => item.id));
  };

  const onCheckItem = (id: number, checked: boolean) => {
    if (checked) {
      return setCheckedItems([...checkedItems, id]);
    }
    setCheckedItems(checkedItems.filter((item) => item !== id));
  };

  return (
    <div className="checklist">
      <ul className="unordered-list">
        <li
          className="unordered-list-item"
          onClick={() => onCheckAll(checkedItems.length !== list.length)}
        >
          <span>All pages</span>
          <Checkbox
            checked={checkedItems.length === list.length}
            onChange={onCheckAll}
          />
        </li>
        <Divider />
        {list.map((item) => (
          <li
            key={item.id}
            className="unordered-list-item"
            onClick={() =>
              onCheckItem(item.id, !checkedItems.includes(item.id))
            }
          >
            <span>{`Page ${item.id}`}</span>
            <Checkbox
              checked={checkedItems.includes(item.id)}
              onChange={(e) => onCheckItem(item.id, e)}
            />
          </li>
        ))}
      </ul>
      <Divider />
      <section className="button-wrapper">
        <Button type="primary">Done</Button>
      </section>
    </div>
  );
};

export default CheckList;
