import React from 'react'
import kid from "../assets/kid.png";
import styled from 'styled-components'
import  gyara from '../assets/11.png'
import two from '../assets/blue.png'
import './Slider.css'


const Stylediv = styled.div`
background-image: url(${gyara});
height:80px;
width:150px;
border-radius:10px;
background-repeat: no-repeat;
margin-left:20px;
`

const Styleimg = styled.img`
   width:150px;
   height:80px;
   border-radius:10px;
`

const Stylemaindiv = styled.div`
    display:flex;
    
`
const MainContainer = styled.div`
position: absolute;
margin-left:700px;
margin-top:-50px;

@media screen and (min-width:1536px){
  margin-left:900px;
}
`

const Sliders = () => {
  return (
   <>
    <div className="container">
		
		<div className="content">
        <div class="carousel-content">
        <h1 class="carousel-heading">
        Improve Your Skill With Katon
        </h1>
        <h3>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmon tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </h3>
        <button>Read More </button>
    </div>
        
			<div className="slideshow">
			
        
				<button className="slide-btn slide-btn-1"></button>
				<button className="slide-btn slide-btn-2"></button>
				<button className="slide-btn slide-btn-3"></button>
				<button className="slide-btn slide-btn-4"></button>
				   
				<div className="slideshow-wrapper">
					<div className="slide">
						<img className="slide-img"
							src=
{kid} />
					</div>
					<div className="slide">
						<img  style={{}} className="slide-img"
							src={kid}
/>
					</div>
					<div className="slide">
						<img className="slide-img" src={kid} />
					</div>
					<div className="slide">
						<img className="slide-img" src={kid}/>
					</div>
				</div>
			</div>
		</div>
        
	</div>
    <MainContainer>
    <Stylemaindiv>
  <Stylediv >
    <Styleimg src={two} />
  </Stylediv>
  <Stylediv >
  <Styleimg src={two} />
</Stylediv>
<Stylediv >
<Styleimg src={two} />
</Stylediv>
</Stylemaindiv>
</MainContainer>
   </>
  )
}

export default Sliders