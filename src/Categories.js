import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const Categories = ({selected, categories,fetchSubCategories}) => {
  return (
    <div>
      {selected ? (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            All Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories &&
              categories.map((item) => {
                let id = item.id

                return (
                    <Dropdown.Item key= {item.id} onClick={() =>fetchSubCategories(id)} >
                  {item.name} {item.shiurCount}
                </Dropdown.Item>
                )

              })}
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </div>
  );
};

export default Categories;
