import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Names = ({fetchCategories, speakers}) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All Speakers
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {speakers &&
            speakers.map((speaker) => {
              if (speaker.isMainSpeaker === true) {
                let mainSpeaker = speaker;
                const id = speaker.id;

                return (
                  <Dropdown.Item key={mainSpeaker.id} onClick={() => fetchCategories(id)}>
                    {mainSpeaker.speaker} {mainSpeaker.id}
                    <br />
                    <br />
                  </Dropdown.Item>
                );
              } else {
                let guest = speaker;
                let id = guest.id
                return <Dropdown.Item key={guest.id} onClick={() => fetchCategories(id)}>{guest.speaker} </Dropdown.Item>;
              }
            })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Names;
