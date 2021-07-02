import {React, useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Names from './Names';
import Categories from './Categories';
import './App.css';
import SubCategories from './SubCategories';
import Search from './Search';
import Results from './Results';

const DropdownList = () => {
  useEffect(() => {
    fetchspeakers();
    fetchCategories();
  }, []);

  const [speakers, setSpeakers] = useState();
  const [selected, setSelected] = useState(false);
  const [categorySelected, setCategorySelected] = useState(false);
  const [subCategory, setSubCategory] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [speakerId, setSpeakerId] = useState();
  const [categories, setCategories] = useState();
  const [searchResults, setSearchResults] = useState();

  const fetchspeakers = async () => {
    try {
      const res = await fetch(
        'https://api.itorah.com/api/Speakers/allspeakers'
      );
      const data = await res.json();
      setSpeakers(data);
      setSelected(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async (id) => {
    setSelected(false);
    try {
      const res = await fetch(
        `https://api.itorah.com/api/Categories/catfilter?SpeakerID=${id}`
      );
      const data = await res.json();
      setCategories(data);
      setSelected(true);
      setSpeakerId(id);
    } catch (error) {
      console.log(error);
    }
  };

  if (speakers) {
    speakers.sort((a, b) => b.isMainSpeaker - a.isMainSpeaker);
  }

  const fetchSubCategories = async (id) => {
    try {
      const res = await fetch(
        `https://api.itorah.com/api/Categories/subfilter?CategoryID=${id}+&SpeakerID=${speakerId}`
      );
      const data = await res.json();
      setSubCategory(data);
      setCategorySelected(true);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubId = (id) => {
    setSubCategoryId(id);
  };

  const fetchSearch = async () => {
    try {
      const res = await fetch(
        `https://api.itorah.com/api/Shiurim/all?PageIndex=1&PageSize=20&CategoryID=${subCategoryId}+&SpeakerID=${speakerId}`
      );
      const data = await res.json();
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };
  // *********************************************************************************************

  return (
    <div>
      <div className="dropdown">
        <Names fetchCategories={fetchCategories} speakers={speakers} />
        <Categories
          selected={selected}
          categories={categories}
          fetchSubCategories={fetchSubCategories}
        />
        <SubCategories
          categorySelected={categorySelected}
          subCategory={subCategory}
          fetchSubId={fetchSubId}
        />
        <Search fetchSearch={fetchSearch} />
      </div>
      {searchResults && (
         <div className="resultsContainer">
        <div className="results">
          <Results searchResults={searchResults} />
        </div>
      </div>
      )}
     
    </div>
  );
};

export default DropdownList;
