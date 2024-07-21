import React, { useState } from 'react';
import Select from 'react-select';
import './Customize.css';

const noteOptions = [
  { value: 'Citrus', label: 'Citrus' },
  { value: 'Bergamot', label: 'Bergamot' },
  { value: 'Lavender', label: 'Lavender' },
  { value: 'Mint', label: 'Mint' },
  { value: 'Lemon', label: 'Lemon' },
  { value: 'Orange', label: 'Orange' },
  { value: 'Grapefruit', label: 'Grapefruit' },
  { value: 'Basil', label: 'Basil' },
  { value: 'Thyme', label: 'Thyme' },
  { value: 'Sage', label: 'Sage' },
  { value: 'Rose', label: 'Rose' },
  { value: 'Jasmine', label: 'Jasmine' },
  { value: 'Ylang Ylang', label: 'Ylang Ylang' },
  { value: 'Geranium', label: 'Geranium' },
  { value: 'Cinnamon', label: 'Cinnamon' },
  { value: 'Clove', label: 'Clove' },
  { value: 'Nutmeg', label: 'Nutmeg' },
  { value: 'Cardamom', label: 'Cardamom' },
  { value: 'Pepper', label: 'Pepper' },
  { value: 'Vanilla', label: 'Vanilla' },
  { value: 'Musk', label: 'Musk' },
  { value: 'Amber', label: 'Amber' },
  { value: 'Patchouli', label: 'Patchouli' },
  { value: 'Sandalwood', label: 'Sandalwood' },
  { value: 'Cedarwood', label: 'Cedarwood' },
  { value: 'Vetiver', label: 'Vetiver' },
  { value: 'Tonka Bean', label: 'Tonka Bean' },
  { value: 'Leather', label: 'Leather' },
  { value: 'Oud', label: 'Oud' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    minWidth: '200px',
    maxWidth: '500px',
    margin: '0 auto',
    borderColor: '#CBA135',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '0.9em',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#CBA135',
    color: '#FAF9F6',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#FAF9F6',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#FAF9F6',
    ':hover': {
      backgroundColor: '#046307',
      color: '#FAF9F6',
    },
  }),
};

const buttonStyle = {
  fontFamily: 'Fustat, sans-serif',
  fontOpticalSizing: 'auto',
  fontWeight: '400',
  fontStyle: 'normal',
  padding: '0.5em 1.5em',
  background: '#004D40',
  color: '#CBA135',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '1.05em',
  transition: 'background 0.3s, transform 0.3s',
  width: '150px',
  margin: '0.5em',
};

const Customize = ({ onAddToBag }) => {
  const [step, setStep] = useState(1);
  const [topNotes, setTopNotes] = useState([]);
  const [middleNotes, setMiddleNotes] = useState([]);
  const [baseNotes, setBaseNotes] = useState([]);
  const [fragranceName, setFragranceName] = useState('');
  const [error, setError] = useState('');
  const [showAddToBagMessage, setShowAddToBagMessage] = useState(false);

  const handleNextStep = () => {
    if ((step === 1 && topNotes.length === 0) ||
        (step === 2 && middleNotes.length === 0) ||
        (step === 3 && baseNotes.length === 0)) {
      setError('Please select at least one note.');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const handlePreviousStep = () => setStep(step - 1);

  const handleSelectChange = (selectedOptions, setNotes) => {
    if (selectedOptions.length <= 3) {
      setNotes(selectedOptions);
    }
  };

  const handleAddToBagClick = () => {
    if (!fragranceName) {
      setError('Please enter a name for your fragrance.');
      return;
    }
    onAddToBag({ name: fragranceName, price: '$415' });
    setShowAddToBagMessage(true);
    setTimeout(() => {
      setShowAddToBagMessage(false);
    }, 2000); // Hides the message after 2 seconds
  };

  
    return (
      
      <div id="customize-section" className="customize">
        
        <h2>Craft Your Fragrance</h2>
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`progress-line ${step >= 2 ? 'active step-1' : ''}`}></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`progress-line ${step >= 3 ? 'active step-2' : ''}`}></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
          <div className={`progress-line ${step >= 4 ? 'active step-3' : ''}`}></div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>4</div>
        </div>
        {step === 1 && (
          <div className="step">
            <h3>Select Top Notes</h3>
            <Select
              isMulti
              options={noteOptions.slice(0, 10)}
              value={topNotes}
              onChange={(selectedOptions) => handleSelectChange(selectedOptions, setTopNotes)}
              className="select"
              styles={customStyles}
            />
            {error && <p className="error">{error}</p>}
            <div className="step-buttons">
              <button style={buttonStyle} onClick={handleNextStep}>Next</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <h3>Select Middle Notes</h3>
            <Select
              isMulti
              options={noteOptions.slice(10, 20)}
              value={middleNotes}
              onChange={(selectedOptions) => handleSelectChange(selectedOptions, setMiddleNotes)}
              className="select"
              styles={customStyles}
            />
            {error && <p className="error">{error}</p>}
            <div className="step-buttons">
              <button style={buttonStyle} onClick={handlePreviousStep}>Previous</button>
              <button style={buttonStyle} onClick={handleNextStep}>Next</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="step">
            <h3>Select Base Notes</h3>
            <Select
              isMulti
              options={noteOptions.slice(20)}
              value={baseNotes}
              onChange={(selectedOptions) => handleSelectChange(selectedOptions, setBaseNotes)}
              className="select"
              styles={customStyles}
            />
            {error && <p className="error">{error}</p>}
            <div className="step-buttons">
              <button style={buttonStyle} onClick={handlePreviousStep}>Previous</button>
              <button style={buttonStyle} onClick={handleNextStep}>Finish</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="results">
            <h3>Your Customized Fragrance</h3>
            <div className="results-notes">
              <div>
                <h4>Top Notes</h4>
                <ul>{topNotes.map(note => <li key={note.value}>{note.label}</li>)}</ul>
              </div>
              <div>
                <h4>Middle Notes</h4>
                <ul>{middleNotes.map(note => <li key={note.value}>{note.label}</li>)}</ul>
              </div>
              <div>
                <h4>Base Notes</h4>
                <ul>{baseNotes.map(note => <li key={note.value}>{note.label}</li>)}</ul>
              </div>
            </div>
            <div className="name-fragrance">
            <label htmlFor="fragrance-name">Name Your Fragrance:</label>
          <input
            type="text"
            id="fragrance-name"
            value={fragranceName}
            onChange={(e) => setFragranceName(e.target.value)}
            placeholder="Enter fragrance name"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="step-buttons">
          <button style={buttonStyle} onClick={handlePreviousStep}>Previous</button>
          <a href="#checkout-section">
            <button style={buttonStyle} onClick={handleAddToBagClick}>Add to Bag</button>
          </a>
        </div>
      </div>
    )}
    {showAddToBagMessage && (
      <div className="add-to-bag-message">
        Item has been added to the bag
      </div>
    )}
  </div>
);
};

export default Customize;

  