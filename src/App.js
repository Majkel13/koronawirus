
import Axios from 'axios';
import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
background: ${props => props.dark ? 'rgb(52, 55, 68)' : '#eee'} ;
width: 80%;
border-radius: 25px;
padding: 20px;
padding-top:20px;
max-width: 680px;
text-align:center;
margin: 0 auto;

justify-content: center;
font-size: 20px;
font-family: 'Roboto Mono', monospace;
position: relative;
`
const Body= styled.div`
background: ${props => props.dark ? '1f2427' : '#aaa'} ;
height: inherit;
width: inherit;
padding-top: 40px;
padding-bottom: 40px;
`
const Content = styled.div`
display: flex;
justify-content: center;
@media (max-width: 768px) {
    display: inline;
    justify-content: center;
  }
  padding-bottom:25px;
  padding-top:25px;
`
const Div = styled.div`
background: ${props => props.dark ? '#ff8c66' : '#1f2427'} ;
width: 150px;
padding: 10px;
border-radius: 10px;
color: #aaa;
margin: 0 auto;
margin-top:10px;
`
const H1 = styled.header`
color: #aaa;
font-size:30px;
padding-top:15px;
`

const Select = styled.select`
background: #343744;
border-style: dashed;
color: #aaa;
font-size: 30px;
border-radius: 5px;
text-align-last: center;
   text-align: center;
   -ms-text-align-last: center;
   -moz-text-align-last: center;
padding-top:5px;
padding-bottom:5px;
width: 80%;
`

const Option = styled.option`
padding-top:5px;
padding-bottom:5px;
`
const Footer = styled.footer`
font-size: 15px;
color: #000;
@media (max-width: 600px){
  font-size: 11px;
}

`
const But = styled.button`
position:absolute;
right: 10px;
bottom: 20px;
border-radius:10px;
padding:10px;
font-size:16px;
border:0;
font-size: 15px;
font-family: 'Roboto Mono';
color:${props => props.dark ? '#aaa' :'#1f2427' } ;
background: ${props => props.dark ? '#1f2427' : '#aaa'} ;
@media (max-width: 600px){
  font-size: 11px;
  bottom: 5px;
}
`
class Box extends Component{


  render(){
    const {confirmed,recovered,deaths,title} = this.props;
    return(
    <div>
      <H1>{title}</H1>
      <Content> 
        <Div >
          <header>Zarażeń</header>
          <span style={{ color: '#b38f00' }}>{confirmed}</span>
        </Div>
        <Div >
          <header>Wyzdrownień</header>
           <span style={{ color: '#12aa23' }}>{recovered}</span>
        </Div>
        <Div >
          <header>Zgonów</header>
          <span style={{ color: '#c11' }}>{deaths}</span>
        </Div>
       </Content>
       </div>
      
    )
  }
}
class App extends Component {

  constructor(props){
    super(props);
    this.getCountryData= this.getCountryData.bind(this);
  }

  state ={
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    confirmedPoland: 0,
    recoveredPoland: 0,
    deathsPoland: 0,
    confirmedCountry: 0,
    recoveredCountry: 0,
    deathsCountry: 0,
    countries:[],
    lastUpdate:'',
    dark: true

  }
  componentDidMount = () =>{
    this.getData();
    this.getDataPoland();
    this.getCountry();
  }

  async getData(){
    const respone = await Axios.get('https://covid19.mathdro.id/api');
    let lastData= respone.data.lastUpdate;
    let myData = lastData.slice(0,10);
    let myTime = lastData.slice(11,16);
    this.setState({
      confirmed: respone.data.confirmed.value,
      recovered: respone.data.recovered.value,
      deaths: respone.data.deaths.value,
      lastUpdate: myData + ' ' + myTime 
    })
  }
  async getDataPoland(){
    const respone = await Axios.get('https://covid19.mathdro.id/api/countries/PL');
    this.setState({
      confirmedPoland: respone.data.confirmed.value,
      recoveredPoland: respone.data.recovered.value,
      deathsPoland: respone.data.deaths.value
    })
  }
  async getCountry(){
    const respone = await Axios.get('https://covid19.mathdro.id/api/countries');
    const countries=JSON.parse(JSON.stringify(respone.data.countries));
    
    this.setState({
      countries
    })
  }
  async getCountryData(e){
    const respone = await Axios.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    this.setState({
      confirmedCountry: respone.data.confirmed.value,
      recoveredCountry: respone.data.recovered.value,
      deathsCountry: respone.data.deaths.value
    })
  }
  selectCountry(){
    return this.state.countries.map((country,i)=>{
      return <Option key={i}>{country.name}</Option>
    })
  }
  changeMotyw = ()=>{
    this.setState({dark: !this.state.dark})
  } 
  render(){
   return (
     <Body dark={this.state.dark}>
     <Container dark={this.state.dark}>
       <But  onClick={this.changeMotyw} dark={this.state.dark}>Dark/Light</But>
       <H1>Statystyki koronawirusa</H1>
       <Box title="Świat:" confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths} />
      <Box title="Polska:" confirmed={this.state.confirmedPoland} recovered={this.state.recoveredPoland} deaths={this.state.deathsPoland} />
     <H1><Select onChange={this.getCountryData}>
        {this.selectCountry()}
      </Select></H1> 
      <Box title="" confirmed={this.state.confirmedCountry} recovered={this.state.recoveredCountry} deaths={this.state.deathsCountry} />
      <Footer style={{color: '#000'}}> Ostatnia aktualizacja: <br/>{this.state.lastUpdate}</Footer>
        
     </Container>
     </Body>

  ); 
  }
  
}

export default App;
