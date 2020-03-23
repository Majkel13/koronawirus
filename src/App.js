
import Axios from 'axios';
import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
background: #250033;
width: 80%;
border-radius: 25px;
padding: 20px;
padding-top:20px;
max-width: 680px;
text-align:center;
margin: 0 auto;
margin-top: 40px;
justify-content: center;
font-size: 20px;
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
background: #534;
width: 150px;
padding: 10px;
border-radius: 10px;

color: #ccc;
margin: 0 auto;
margin-top:10px;
`
const H1 = styled.h1`
color: #889;
font-size:30px;
margin-bottom: 0px;
`

const Select = styled.select`
background: #250033;
color: #889;
font-size: 20px;
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
class Box extends Component{


  render(){
    const {confirmed,recovered,deaths,title} = this.props;
    return(
    <div>
      <H1>{title}</H1>
      <Content> 
        <Div style={{ background: '#b38f00' }}>
          <header>Zarażeń</header>
          {confirmed}
        </Div>
        <Div style={{ background: '#123123' }}>
          <header>Wyzdrownień</header>
          {recovered}
        </Div>
        <Div style={{ background: '#111' }}>
          <header>Zgonów</header>
          {deaths}
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
    countries:[]

  }
  componentDidMount = () =>{
    this.getData();
    this.getDataPoland();
    this.getCountry();
  }

  async getData(){
    const respone = await Axios.get('https://covid19.mathdro.id/api');
    this.setState({
      confirmed: respone.data.confirmed.value,
      recovered: respone.data.recovered.value,
      deaths: respone.data.deaths.value
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
    const countries = Object.keys(respone.data.countries)
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
      return <Option key={i}>{country}</Option>
    })
  }

  render(){
   return (
     <Container >
       <H1>Statystyki kolanowirusa</H1>
       <Box title="Świat:" confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths} />
      <Box title="Polska:" confirmed={this.state.confirmedPoland} recovered={this.state.recoveredPoland} deaths={this.state.deathsPoland} />
     <H1><Select onChange={this.getCountryData}>
        {this.selectCountry()}
      </Select></H1> 
      <Box title="" confirmed={this.state.confirmedCountry} recovered={this.state.recoveredCountry} deaths={this.state.deathsCountry} />
     </Container>
    

  ); 
  }
  
}

export default App;
