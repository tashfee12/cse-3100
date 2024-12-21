import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Maine Coon' },
  { name: 'Shadow', age: '1', breed: 'Siamese' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Maine Coon' },
  { name: 'Simba', age: '2', breed: 'British Shorthair' },
];

export default function AvailableCats() {
  const [catsWithImages, setCatsWithImages] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const cats = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCatsWithImages(cats);
        setFilteredCats(cats); // Initialize the filtered list with all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = () => {
    const filtered = catsWithImages.filter(
      (cat) =>
        (!searchName || cat.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (!selectedBreed || cat.breed === selectedBreed)
    );
    setFilteredCats(filtered);
  };

  return (
    <section>
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      <div className="d-flex justify-content-end mb-4">
        <select
          value={selectedBreed}
          onChange={(e) => {
            setSelectedBreed(e.target.value);
            handleSearch(); // Filter when breed is selected
          }}
          className="form-select me-2"
          style={{ maxWidth: '200px' }}
        >
          <option value="">Select Breed</option>
          <option value="Persian">Persian</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Siamese">Siamese</option>
          <option value="British Shorthair">British Shorthair</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="form-control"
          style={{ maxWidth: '200px' }}
        />

        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
