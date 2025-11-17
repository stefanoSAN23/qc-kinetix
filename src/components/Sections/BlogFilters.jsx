import { useState } from 'react';
import './BlogFilters.css';

const BlogFilters = ({ onFilterChange }) => {
  const [tempConditions, setTempConditions] = useState([]);
  const [tempDateOrder, setTempDateOrder] = useState('');
  const [tempLanguages, setTempLanguages] = useState([]);

  const conditionOptions = [
    { id: 'knee-pain', label: 'Knee Pain', value: 'knee-pain' },
    { id: 'shoulder-pain', label: 'Shoulder Pain', value: 'shoulder-pain' },
    { id: 'back-pain', label: 'Back Pain', value: 'back-pain' },
    { id: 'hip-pain', label: 'Hip Pain', value: 'hip-pain' },
    { id: 'neck-pain', label: 'Neck Pain', value: 'neck-pain' },
    { id: 'hand-pain', label: 'Hand Pain', value: 'hand-pain' },
    { id: 'arm-pain', label: 'Arm Pain', value: 'arm-pain' },
    { id: 'arthritis-pain', label: 'Arthritis Pain', value: 'arthritis-pain' },
    { id: 'elbow-pain', label: 'Elbow Pain', value: 'elbow-pain' },
    { id: 'ankle-pain', label: 'Ankle Pain', value: 'ankle-pain' },
    { id: 'leg-pain', label: 'Leg Pain', value: 'leg-pain' },
    { id: 'foot-pain', label: 'Foot Pain', value: 'foot-pain' },
    { id: 'wrist-pain', label: 'Wrist Pain', value: 'wrist-pain' }
  ];

  const handleConditionChange = (value) => {
    setTempConditions(prev => {
      return prev.includes(value)
        ? prev.filter(c => c !== value)
        : [...prev, value];
    });
  };

  const handleDateOrderChange = (value) => {
    setTempDateOrder(value);
  };

  const handleLanguageChange = (value) => {
    setTempLanguages(prev => {
      return prev.includes(value)
        ? prev.filter(l => l !== value)
        : [...prev, value];
    });
  };

  const handleApplyFilter = (e) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange({
        conditions: [...tempConditions],
        dateOrder: tempDateOrder,
        languages: [...tempLanguages]
      });
    }
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    setTempConditions([]);
    setTempDateOrder('');
    setTempLanguages([]);
    if (onFilterChange) {
      onFilterChange({
        conditions: [],
        dateOrder: '',
        languages: []
      });
    }
  };

  return (
    <section className="blog-filters-section">
      <div className="blog-filters-container">
        <div className="research-filters">
          {/* Sort Condition */}
          <div className="filter-group category-filters">
            <p>Sort Condition</p>
            <div className="row">
              <div className="fields category-fields">
                <div className="column-sm-4">
                  {conditionOptions.slice(0, 4).map(option => (
                    <div key={option.id} className="field">
                      <input
                        type="checkbox"
                        id={option.id}
                        value={option.value}
                        className="category"
                        checked={tempConditions.includes(option.value)}
                        onChange={() => handleConditionChange(option.value)}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </div>
                <div className="column-sm-4">
                  {conditionOptions.slice(4, 8).map(option => (
                    <div key={option.id} className="field">
                      <input
                        type="checkbox"
                        id={option.id}
                        value={option.value}
                        className="category"
                        checked={tempConditions.includes(option.value)}
                        onChange={() => handleConditionChange(option.value)}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </div>
                <div className="column-sm-4">
                  {conditionOptions.slice(8).map(option => (
                    <div key={option.id} className="field">
                      <input
                        type="checkbox"
                        id={option.id}
                        value={option.value}
                        className="category"
                        checked={tempConditions.includes(option.value)}
                        onChange={() => handleConditionChange(option.value)}
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sort Date */}
          <div className="filter-group date-filters">
            <p>Sort Date</p>
            <div className="row">
              <div className="fields date-fields">
                <div className="column-sm-12">
                  <div className="field">
                    <input
                      type="radio"
                      name="dateOrder"
                      value="newest"
                      id="newest"
                      checked={tempDateOrder === 'newest'}
                      onChange={(e) => handleDateOrderChange(e.target.value)}
                    />
                    <label htmlFor="newest">Newest</label>
                  </div>
                  <div className="field">
                    <input
                      type="radio"
                      name="dateOrder"
                      value="oldest"
                      id="oldest"
                      checked={tempDateOrder === 'oldest'}
                      onChange={(e) => handleDateOrderChange(e.target.value)}
                    />
                    <label htmlFor="oldest">Oldest</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sort Language - Desktop */}
          <div className="filter-group language-filters language-filters-desktop">
            <p>Sort Language</p>
            <div className="row">
              <div className="fields language-fields">
                <div className="column-sm-12">
                  <div className="field">
                    <input
                      type="checkbox"
                      id="espanol"
                      value="espanol"
                      className="category"
                      checked={tempLanguages.includes('espanol')}
                      onChange={() => handleLanguageChange('espanol')}
                    />
                    <label htmlFor="espanol">Español</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      id="english"
                      value="english"
                      className="category"
                      checked={tempLanguages.includes('english')}
                      onChange={() => handleLanguageChange('english')}
                    />
                    <label htmlFor="english">English</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sort Language - Mobile */}
          <div className="filter-group language-filters language-filters-mobile">
            <p>Sort Language</p>
            <div className="row">
              <div className="fields language-fields">
                <div className="column-sm-12">
                  <div className="field">
                    <input
                      type="checkbox"
                      id="espanol-mobile"
                      value="espanol"
                      className="category"
                      checked={tempLanguages.includes('espanol')}
                      onChange={() => handleLanguageChange('espanol')}
                    />
                    <label htmlFor="espanol-mobile">Español</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      id="english-mobile"
                      value="english"
                      className="category"
                      checked={tempLanguages.includes('english')}
                      onChange={() => handleLanguageChange('english')}
                    />
                    <label htmlFor="english-mobile">English</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button className="apply_filter_btn" onClick={handleApplyFilter}>
              Apply Filter
            </button>
            <button className="clear_filter_btn" onClick={handleClearFilter}>
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;
