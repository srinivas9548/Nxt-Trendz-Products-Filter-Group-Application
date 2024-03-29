import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    enterSearchInput,
    changeSearchInput,
    categoryOptions,
    changeCategory,
    changeRating,
    activeCategoryId,
    activeRatingId,
    ratingsList,
    clearFilters,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderRatingsFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">
        {ratingsList.map(eachRating => (
          <li className="rating-item" key={eachRating.ratingId}>
            <button
              type="button"
              className={`rating-button ${
                eachRating.ratingId === activeRatingId ? 'active' : ''
              }`}
              onClick={() => changeRating(eachRating.ratingId)}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-stars-image"
              />
              <p className="and-up">& up</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  )

  const renderProductsCategory = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(eachCategory => (
          <li className="category-item" key={eachCategory.categoryId}>
            <button
              type="button"
              className={`category-button ${
                eachCategory.categoryId === activeCategoryId ? 'active' : ''
              }`}
              onClick={() => changeCategory(eachCategory.categoryId)}
            >
              <p className="category-name">{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  )

  const renderSearchInput = () => (
    <>
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          value={searchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    </>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductsCategory()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filter-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
