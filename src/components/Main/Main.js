import React, { Component } from 'react';
import './Main.scss';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons'
import sapin from './img/sapin_moisi_2.png';
import chomeur from './img/me_1_reverse.png';
import devault from './img/devault.jpg';
import gold from './img/gold_black.png';
import carbon from './img/carbon_black.png';
import sulfur from './img/sulfur_black.png';
import titanium from './img/titanium_black.png';
import chakonten from './img/chakonten.jpg';
import encule from './img/jevaistetuer.jpg';
import laink from './img/laink_dab.png';
import tera from './img/terracid_dab.png';
import bouffe1 from './img/bouffe_1.png'
import bouffe2 from './img/bouffe_2.png'
import bouffe3 from './img/bouffe_3.png'
import chaise from './img/chaise_fetish.png'
import wazo from './img/wazo.jpg'
import colors from './img/dr_colors.jpg'
import woaw from './img/woaw.gif'
import potato from './img/happy_potato.png'
import ouate from './img/ouatedephoque.jpg';
import ocie from './img/ocie_elliot.png';
import hanz1 from './img/hanz_kotter.png'
import hanz2 from './img/hanz_kotter_2.png'
import design from './img/design.png'
import abstract from './img/abstract.jpg'
import musique from './img/musique.png'
import internet from './img/internet.gif'
import terminal from './img/terminal.png'
import hack from './img/hack.gif'
import photoshop from './img/photshop.png'
import insta from './img/insta.png'
import indesign from './img/indesign.png'
import wordpress from './img/wordpress.png'
import css from './img/css-logo.png'
import html from './img/HTML_Logo.png'
import js from './img/js-logo.png'
import behance from './img/behance.png'
import bootstrap from './img/bootstrap-stack.png'
import bash from './img/bash.png'
import illustrator from './img/illustrator.png'
import linkedin from './img/linkedin.png'
import reactimg from './img/react_2x.png'
import atb from './img/atb.jpg';
import soapjo from './img/soap_jo.png'
import soapyo from './img/soap_yo.png'

import rouge from './img/rougeot.png'
import es from './img/ah_denis.png'
import winenot from './img/winenotreverse.png';
import cornichon from './img/cornichon.jpg'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      domain: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // console.log(this.state);
    }

  handleForm(event) {
    event.preventDefault();
    this.props.domain(this.state.domain)
  }

  render() {
    return (
      <div className="Main">
        <Parallax ref={ref => (this.parallax = ref)} pages={12}>
        {/* Backgrounds */}
        <ParallaxLayer offset={0} speed={1} factor={1} style={{ background: `linear-gradient(to bottom,#ff00f4, #db49ff)`}} />
        <ParallaxLayer offset={1} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#db49ff, #b662ff)`}} />
        <ParallaxLayer offset={2} speed={1} factor={1.5 } style={{ background: `linear-gradient(to bottom,#b662ff, #9272ff)`}} />
        <ParallaxLayer offset={3} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#9272ff, #717cf9)`}} />
        <ParallaxLayer offset={4} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#717cf9, #4693ff)`}} />
        <ParallaxLayer offset={5} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#4693ff, #12a6ff)`}} />
        <ParallaxLayer offset={6} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#12a6ff, #00b6ff)`}} />
        <ParallaxLayer offset={7} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#00b6ff, #00d7ff)`}} />
        <ParallaxLayer offset={8} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#00d7ff, #00f0cd)`}} />
        <ParallaxLayer offset={9} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#00f0cd, #63ff7a)`}} />
        <ParallaxLayer offset={10} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#63ff7a, #f4ff00)`}} />
        <ParallaxLayer offset={11} speed={1} factor={1.5} style={{ background: `linear-gradient(to bottom,#f4ff00, #FFDD00)`}} />


        {/* Items */}
        <ParallaxLayer offset={0} speed={1} style={{display: 'flex', flexDirection: 'column', zIndex:10}}>
          <h1>CHRISTMAS TIME</h1>
          <h2>Fait dans la joie et l'allégresse pour vous par un chomeur que vous connaissez bien</h2>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={0} speed={0.9} style={{ opacity: 1, display:'flex', flexDirection: 'column'}}>
          <img id = {'chomeur'} src={chomeur} style={{height:'10%', width: '10%', marginLeft: '2%', marginTop:'auto'}} alt="yonni"/>
          <p>le dit chommeur</p>
        </ParallaxLayer> */}
        <ParallaxLayer id = {'chomeur'}offset={0.7} speed={0.7} style={{ opacity: 1, zIndex:0 , width: 'auto', marginLeft:'5%'}}>
          <img src={chomeur} alt="sapin" className="shadow"/>
          <p>Le dit "chomeur" en pleine reflexion de cadeau</p>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} style={{ opacity: 1, display:'flex', zIndex:3 }}>
          <img src={sapin} className='not-shadow' style={{ bottom: 0, height:'70%', width: 'auto', marginLeft: '63%', marginTop:'auto'}} alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} style={{ opacity: 1, display:'flex',  zIndex:1}}>
          <img src={sapin} className='not-shadow' style={{ bottom: 0, height:'50%', width: 'auto', marginLeft: '75%', marginTop:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <img src={sapin} className='not-shadow' style={{ bottom: 0, height:'40%', width: 'auto', marginLeft: '83%', marginTop:'auto'}}  alt="sapin"/>
        </ParallaxLayer>


        <ParallaxLayer offset={0.99} speed={0.4} style={{color: '#db49ff', display: 'flex', flexDirection: 'column', zIndex:10}}>
          <h1>LA RENCONTRE</h1>
          {/* <h2>Fait dans la joie et l'allégresse pour vous par un chomeur que vous connaissez bien</h2> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.6} style={{color: '#fff', zIndex:10, marginLeft: '0%'}}>
            <h2 className="bite" style={{marginRight: '70%'}}>The place to beer</h2>
            <h2 className="bite" style={{marginRight: '65%'}}>pleins comme des sacs</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.5} style={{color: '#fff', zIndex:10, margin: 'auto', display:'flex', flexDirection: 'column'}}>
          <h1 style={{marginBottom: '0%'}}>Le B148</h1>
          <h1>Le 27 septembre ma caille</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <img src={devault} style={{ bottom: 0, height:'30%', width: 'auto', marginLeft: '5%', marginTop:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <img src={atb} style={{ bottom: 0, height:'30%', width: 'auto', marginLeft: '80%', marginTop:'auto'}}  alt="sapin"/>

        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <h1 style={{color:'#b662ff',bottom: 0, marginTop:'auto'}}> Et pis ca aussi un ti peu {"->"}</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.99} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <h1 style={{color:'white'}}> {'<-'} AKA notre musique tmtc</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:'column' }}>
          <h1 style={{color:'white'}}>LA LUCK</h1>
          <h2 style={{color:'white'}}>le 2 octobre, pas le temps de niaiser</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:'column' }}>
          <h2 className="bite" style={{color:'white',marginLeft: '7%', marginBottom:'0%'}}>Grosse Marade</h2>
          <h2 className="bite" style={{color:'white',marginLeft: '13%'}}>&nbsp;&nbsp;&nbsp;/ 20</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={-4} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:'column' }}>
          <h2 className="couille" style={{color:'white',marginRight: '7%', marginBottom:'0%'}}>Repas à base de biere</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={30} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:'column' }}>
          <h2 className="" style={{color:'white'}}>bite</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={1.3} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img src={chakonten} style={{ bottom: 0, height:'50%', width: 'auto',margin:'auto'}}  alt="sapin"/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.1} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <h1 style={{color:'#9272ff',bottom: 0, marginTop:'-20%'}}>Le vrai début c'est la !</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <h1 style={{color:'white'}}>Faire connaissance</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={-3} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={gold} style={{ bottom: 0, height:'10%', width: 'auto',margin:'auto auto auto 32%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={4} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={titanium} style={{ bottom: 0, height:'10%', width: 'auto',margin:'auto auto auto 40%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={1.1} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={sulfur} style={{ bottom: 0, height:'10%', width: 'auto',margin:'auto auto auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={1.6} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={titanium} style={{ bottom: 0, height:'10%', width: 'auto',margin:'auto 40% auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={-2.5} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={carbon} style={{ bottom: 0, height:'10%', width: 'auto',margin:'auto 32%  auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={1} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <h1 style={{ bottom: 0, height:'10%', width: 'auto'}}>No offence hein</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={1.3} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <img src={encule} style={{ bottom: 0, height:'30%', width: 'auto',margin:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={laink} className="not-shadow" style={{ height:'30%', width: 'auto',marginTop:'-20%',marginLeft:'10%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"#717cf9", marginTop:"-20%"}}>DAB WILL NEVER BE DEAD</h1>
          <h2 style={{color:"#717cf9", textTransform:'UPPERCASE'}}>bien trop sous côté</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={4.1} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"white",textTransform:'UPPERCASE'}}>La bouffe et le lol</h1>

        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={tera} className="not-shadow" style={{ height:'30%', width: 'auto',marginTop:'-20%', marginRight:'10%',marginLeft:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={2} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={bouffe1} className="not-shadow" style={{ height:'20%', width: 'auto',marginTop:'', marginRight:'10%',marginLeft:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={-4} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={bouffe2} className="not-shadow" style={{ height:'20%', width: 'auto',marginTop:'', marginRight:'60%',marginLeft:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.1} speed={2.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={bouffe3} className="not-shadow" style={{ height:'20%', width: 'auto',marginTop:'', marginRight:'80%',marginLeft:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={2.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={wazo} style={{ height:'40%', width: 'auto',marginTop:'', marginRight:'30%',marginLeft:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={2.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={ouate} style={{ height:'30%', width: 'auto',marginTop:'auto', marginRight:'5%',marginLeft:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={4.9} speed={1.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={chaise} className="not-shadow"
            style={{ height:'40%', width: 'auto',marginTop:'', marginRight:'80%',marginLeft:'auto',backgroundColor:'transparent'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, }}>
          <img src={potato} className="not-shadow"
            style={{ height:'40%', width: 'auto',marginTop:'-68%', marginRight:'40%',marginLeft:'auto',backgroundColor:'transparent'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"#4693ff", marginTop:"-20%", textTransform:'UPPERCASE'}}>le 20{'/'}10 La soirée chez jm</h1>
          <h2 style={{color:"#4693ff", textTransform:'UPPERCASE'}}>pas la peine de préciser je présume</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={woaw} className="not-shadow" style={{ height:'90%', width: 'auto',marginTop:'10%', margin:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={colors} className="" style={{ height:'95%', width: '95%', margin:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"black", marginTop:"-20%", textTransform:'UPPERCASE', background:'radial-gradient(circle, #c744d4, #b257de, #9b65e6, #8471e9, #6d7aea, #4a89ee, #2496ec, #00a0e6, #04b0db, #4dbdcc, #7dc7c0, #a5cfbd)',WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'}}>Notre premiere exposition a deux</h1>
          <h2 style={{color:"black", textTransform:'UPPERCASE', background:'radial-gradient(circle, #a5cfbd,#7dc7c0,#4dbdcc,#04b0db,#00a0e6,#2496ec,#4a89ee,#6d7aea,#8471e9,#9b65e6,#b257de,#c744d4)',WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Dr colors et l'Atlas
          </h2>>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"#00b6ff", marginTop:"-20%", textTransform:'UPPERCASE'}}>Ton monde c'est un peu ca</h1>
          <h2 style={{color:"#00b6ff", textTransform:'UPPERCASE'}}>(images non contractuelles)</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={7.3} speed={0.9} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={musique} className="not-shadow" style={{ height:'40%', width: 'auto', margin:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={7.2} speed={1.1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={hanz1} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto',marginLeft:'15%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={7.2} speed={2.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={hanz2} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto', marginRight:'15%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={7.7} speed={1.2} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={abstract}  style={{ height:'30%', width: 'auto', margin:'auto',marginRight:'10%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={7.7} speed={1.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={design} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto', marginLeft:'20%'}}  alt="sapin"/>
        </ParallaxLayer>

        <ParallaxLayer offset={7.1} speed={0.5} style={{color: '#fff', zIndex:10, margin: 'auto', display:'flex', flexDirection: 'column'}}>
          <h1 style={{marginBottom: '0%'}}>DE L'ART ET DE LA MUSIQUE</h1>
          <h2 style={{textTransform:'uppercase'}} >bien trop stylé!</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={8.1} speed={0.5} style={{color: '#fff', zIndex:10, margin: 'auto', display:'flex', flexDirection: 'column'}}>
          <h1 style={{marginBottom: '0%'}}>DU CODE DU CODE DU CODE</h1>
          <h2 style={{textTransform:'uppercase'}} >plutot cool aussi !</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={8} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"#00d7ff", marginTop:"-20%", textTransform:'UPPERCASE'}}>Le mien c'est un peu ca</h1>
          <h2 style={{color:"#00d7ff", textTransform:'UPPERCASE'}}>(au fait c'est des résumés don't trigger)</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={8.3} speed={0.9} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={internet} style={{ height:'40%', width: 'auto', margin:'auto', marginLeft:'2%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={8.5} speed={1.1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={hack} className="not-shadow" style={{ height:'50%', width: 'auto', margin:'auto',}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={8.2} speed={2} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={terminal} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto', marginRight:'10%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={8.9} speed={1.2} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={reactimg} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto', marginRight:'12%'}}  alt="sapin"/>
        </ParallaxLayer>
        {/*
        <ParallaxLayer offset={8.5} speed={1.5} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={devault} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto', marginLeft:'20%'}}  alt="sapin"/>
        </ParallaxLayer> */}

        <ParallaxLayer offset={9} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"#00f0cd", marginTop:"-20%", textTransform:'UPPERCASE'}}>La est apparue l'idée de cadeau !</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={9.1} speed={0.5} style={{color: '#fff', zIndex:10, margin: 'auto', display:'flex', flexDirection: 'column'}}>
          <h1 style={{marginBottom: '0%'}}>A défaut de ca :</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={9.0} speed={0.9} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={ocie} className="not-shadow" style={{ height:'30%', width: 'auto', margin:'auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={9.3} speed={1.1} style={{color: '#fff', zIndex:10, margin: 'auto', display:'flex', flexDirection: 'column'}}>
          <h2 style={{margin:'auto'}}>on a ca </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={9.7} speed={1.3} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={soapjo} className="" style={{ height:'30%', width: 'auto', margin:'auto', marginLeft:'25%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={9.7} speed={1.3} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <img src={soapyo} className="" style={{ height:'30%', width: 'auto', margin:'auto', marginRight:'25%'}}  alt="sapin"/>
        </ParallaxLayer>

        <ParallaxLayer offset={10} speed={1.1} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <h1 style={{color:'#63ff7a',bottom: 0, marginTop:'-20%', textTransform:'uppercase'}}>souscrivons donc à un ...</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={0.8} style={{ opacity: 1, display:'flex', zIndex:2 }}>
          <h1 style={{color:'white'}}>MIX AND TWIIIIIIST</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={3} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={photoshop} style={{ bottom: 0, height:'25%', width: 'auto',margin:'5% auto auto 12%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.1} speed={2} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={insta} style={{ bottom: 0, height:'20%', width: 'auto',margin:'auto auto auto 5%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.1} speed={1.1} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={indesign} style={{ bottom: 0, height:'25%', width: 'auto',margin:'7% 20% auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.4} speed={1.1} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={illustrator} style={{ bottom: 0, height:'20%', width: 'auto',margin:'auto auto auto 25%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.1} speed={1.6} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={wordpress} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto auto auto 30%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.7} speed={2} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={css} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto auto  auto 2%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.3} speed={5} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={html} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto auto auto 40%'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.35} speed={4} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={js} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto 12% auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.8} speed={1.6} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={behance} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto 33% auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.6} speed={2.5} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={bootstrap} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto 27%  auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.2} speed={1.8} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={bash} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto 40%  auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={10.1} speed={1.4} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <img className='not-shadow' src={linkedin} style={{ bottom: 0, height:'15%', width: 'auto',margin:'auto 3%  auto auto'}}  alt="sapin"/>
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={1} factor={1} style={{ opacity: 1, display:'flex', zIndex:2, flexDirection:"column" }}>
          <h1 style={{color:"#f4ff00", marginTop:"-18%", textTransform:'UPPERCASE'}}>A completer ci dessous</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={11} speed={1} style={{ opacity: 1, display:'flex', zIndex:2,}}>
          <form onSubmit={this.handleForm}>
            <div className="inputGroup">
              {/* <div className="www">www.</div> */}
              <div className="www">www.</div>
              <input type="text" placeholder="anyjeudemotssurkerroujoke" name='domain' value={this.state.domain} onChange={this.handleInputChange} />
              <div className="com">.com</div>
            </div>
            <input className="send" type="submit" value="GOGOGOGOGO"/>
            {this.props.domainName !== '' && (<div className="cadeau">
                <div className="text">Et voila tu viens de commander un site tout fait à l'adresse : </div>
                <div className="domain">www.<span>{this.props.domainName}</span>.com</div>
              </div>
            )}
          </form>
        </ParallaxLayer>
        </Parallax>

      </div>
    );
  }
}

export default Main;
