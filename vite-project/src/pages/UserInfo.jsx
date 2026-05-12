import React from 'react';
import './UserInfo.css';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Footer  from "../components/Footer/Footer"
import { useRecoilValue } from 'recoil';
import {userAtom} from "../recoil/userAtom";

const recipes = [
  { id: 1, title: "Italian-style tomato salad", time: "14 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Vegetable and shrimp spaghetti", time: "15 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Lotus delight salad", time: "20 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Snack cakes", time: "21 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 5, title: "Salad with cabbage and shrimp", time: "32 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 6, title: "Bean, shrimp, and potato salad", time: "32 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 7, title: "Sunny-side up fried eggs", time: "32 minutes", image: "https://via.placeholder.com/300x200" },
  { id: 8, title: "Lotus delight salad", time: "32 minutes", image: "https://via.placeholder.com/300x200" },
];


const UserInfo = () => {
    
const {userId} = useParams();

const navigate = useNavigate();

const userInfo = useRecoilValue(userAtom);

const handleBackHomePage = () =>{
    return navigate(`/`);
}

  return (
    <div>
         <Navbar></Navbar>
        <div className="recipe-box-container">
        
        {/* Breadcrumb */}
        <nav className="breadcrumb">
            <span onClick={handleBackHomePage()}>Home</span> &gt; <span className="active">Your Recipe Box</span>
        </nav>

        <h1 className="main-title">{userInfo.first_name + " " +userInfo.last_name}'s Recipe Box</h1>

        {/* Profile Header */}
        <header className="profile-header">
            <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="Emma Gonzalez" />
            </div>
            <div className="profile-info">
            <p className="description">
                Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. 
                She is also an accomplished author, contributing to numerous cookbooks and food publications. 
                Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
            </p>
            <div className="profile-actions">
                <span className="subscribers">6.5k Subscribes</span>
                <button className="share-btn">Share <span className="share-icon">↗</span></button>
            </div>
            </div>
        </header>

        {/* Tabs */}
        <div className="tabs-container">
            <button className="tab active">Saved Recipes</button>
            <button className="tab">Folders</button>
            <button className="tab">Recipes by Genevieve</button>
        </div>

        {/* Recipe Grid */}
        <div className="recipe-grid">
            {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
                <div className="card-image">
                <img src={recipe.image} alt={recipe.title} />
                <button className="bookmark-btn">🔖</button>
                </div>
                <div className="card-content">
                <h3 className="recipe-title">{recipe.title}</h3>
                <span className="recipe-time">{recipe.time}</span>
                </div>
            </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
            <button className="page-num active">1</button>
            <button className="page-num">2</button>
            <button className="page-num">...</button>
            <button className="page-num">10</button>
            <button className="page-num">11</button>
            <button className="page-num">&gt;</button>
        </div>
        </div>

        <Footer></Footer>
    </div>
    
  );
};

export default UserInfo;