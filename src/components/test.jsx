import React, { Component } from "react";
import PostData from "./data.json";
import '../style.css';
function Promo(promo,x){
	return (promo.price-(promo.price*x)).toFixed(2);
}
function listItems(data){
	return(
			data.map((obj,index)=>{
				return(
					<li key={obj.id} className="reactLi">
						<div className="img">
							<img src={require(`${obj.image}`)} alt="" align=""/>
						</div>
						<div className="item-info">
							<p>
								{obj.title}
							</p>
							<hr/>
							<p>Price: 
								<b> 
									{(obj.promo === true) ? <span> <strike>{obj.price}</strike> {Promo(obj,0.50)} PLN <span className="sale">-50%</span></span> : <span> {obj.price} PLN</span>}
								</b>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, nostrum voluptas....
								
							</p>
						</div>	
						</li>
					);
				})

	);
}
class App extends Component{
	

	render(){
		return(
			<div className="container">
				<header>
					<div className="header">
						<div className="profile">
							<ul>
								<li className="headerList">INFOa</li>
								<li className="headerList">KONTAKT</li>
								<li className="headerList">SHOP</li>
								<li className="headerList">PROFIL</li>
							</ul>
							<span>
								<a href="#">Logged as Guess</a>
								<img src={require('./img/avatar1.jpg')} className="avatarImg" width="50" height="50"/>
							</span>
						</div>
					</div>
				</header>
				<main>
					<div className="main">

						<div className="nav">
							<ul className="listItems">
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
								<li className="item">Stronka za 10 koła tak o</li>
							</ul>
						</div>
						<div className="items">
							<div className="search">
								<ul className="icons">
									<li className="icon"><i className="fas fa-arrow-up fa-2x"></i></li>
									<li className="icon"><i className="fas fa-arrow-down fa-2x"></i></li>
									<li className="icon"><i className="fas fa-gamepad fa-2x"></i></li>
									<li className="icon"><i className="fas fa-desktop fa-2x"></i></li>
									<li className="icon"><i className="fas fa-dollar-sign fa-2x"></i></li>
								</ul>
								<div className="input">
									<input type="text" placeholder="Search.."/>

								</div>
								<div className="cart">
									<i className="fas fa-shopping-cart"></i>
									<p className="cartInfo"><b>2000.00PLN</b></p>
								</div>
							</div>
							<div className="list">
								
								{listItems(PostData)}
							</div>
						</div>
					</div>
				</main>
				<footer>
					<div className="footer">
					<div className="footerCenter">
						<div className="footerInfo">
								<h3>Kontakt:</h3>
								<p className="footerP">E-mail: <span className="footerSpan">Pan.Rusek99@gmail.com</span></p>
								<p className="footerP">Telefon: <span className="footerSpan">783798222</span></p>

							</div>
							<div className="footerInfo">
								<h3>Social: </h3>
								<a href="#"><i className="fab fa-facebook-square"></i></a>
								<a href="#"><i className="fab fa-github"></i></a>
								<a href="#"><i className="fab fa-twitter-square"></i></a>
							</div>
							
						</div>
						<p className="copy">{'\u00A9'} Lorem Stronka za 10 koła tak o Rusek Łukasz spółka w ZOO</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;