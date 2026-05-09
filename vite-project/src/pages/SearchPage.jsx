import React from 'react';
import './SearchPage.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {recipeState} from "../recoil/recipeAtom";
import Section from '../components/Section/Section';

const SearchPage = () => {
  const {title} = useParams();
  const recipes = useRecoilValue(recipeState);
  
  const recipeList = recipes.filter(r=> r.id.includes(title) || r.title.includes(title));

  return (
    <>
    <Navbar></Navbar>
    <div className="search-page-container">
        
      <div className="search-content">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-header">
            <span className="filter-icon">≡</span>
            <span className="filter-title">FILTERS</span>
          </div>

          {/* Type Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Type</span>
              <span className="arrow-up">^</span>
            </div>
            <div className="checkbox-grid">
              {['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sauteed', 'Baked', 'Steamed', 'Stewed'].map((item) => (
                <label key={item} className="checkbox-item">
                  <input type="checkbox" defaultChecked={item === 'Grilled' || item === 'Roasted'} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Time Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Time</span>
              <span className="arrow-up">^</span>
            </div>
            <div className="range-slider">
              <div className="time-labels">
                <span>30 minutes</span>
                <span>50 minutes</span>
              </div>
              <div className="slider-track">
                <div className="slider-thumb left"></div>
                <div className="slider-thumb right"></div>
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="filter-section">
            <div className="section-header">
              <span>Rating</span>
              <span className="arrow-up">^</span>
            </div>
            <div className="rating-list">
              {[5, 4, 3, 2, 1].map((stars) => (
                <label key={stars} className="checkbox-item">
                  <input type="checkbox" defaultChecked={stars <= 3} />
                  <span className="stars-row">
                    {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button className="apply-btn">Apply</button>
        </aside>

        {/* Main Result Area */}
        <main className="results-area">
          {
            recipeList == null &&
            <h2 className="no-result-title">Sorry, no results were found for {title}</h2>
          }

          {
            recipeList != null &&
            <Section data={recipeList}></Section>
          }
          
          {
            recipeList == null &&
            
            <div className="no-result-illustration">
              <div className="illustration-box">
                <div className="magnifier">❌</div>
                <div className="box-base"></div>
              </div>
            </div>
          }

          <div>
            <hr />

            <p className="no-result-text goiy">We have all your Independence Day sweets covered.</p>
            
            <div className="suggested-tags goiy">
              <span className="tag pink">Sweet Cake</span>
              <span className="tag purple">Black Cake</span>
              <span className="tag red">Pozole Verde</span>
              <span className="tag cyan">Healthy food</span>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default SearchPage;