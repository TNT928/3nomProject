import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SubCategories = ({categorySelected, subCategory, fetchSubId}) => {

  return (
    <div>
      {categorySelected ? (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sub Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {subCategory &&
              subCategory.map((item) => (
                <Dropdown.Item onClick={() => fetchSubId(item.id)} key={item.id}>{item.name}</Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </div>
  );
};

export default SubCategories;
