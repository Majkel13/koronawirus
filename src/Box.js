import React, {Component} from 'react';
import styled from 'styled-components';
import AnimatedNumber from 'animated-number-react';

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

class Box extends Component{

  formatValue = value => value.toFixed(0);

    render(){
      const {confirmed,recovered,deaths,title} = this.props;
      return(
      <div>
        <H1>{title}</H1>
        <Content> 
          <Div >
            <header>Zarażeń</header>
            <span style={{ color: '#b38f00' }}><AnimatedNumber value={confirmed} formatValue={this.formatValue} /></span>
          </Div>
          <Div >
            <header>Wyzdrownień</header>
             <span style={{ color: '#12aa23' }}> <AnimatedNumber value={recovered}  formatValue={this.formatValue} /></span>
          </Div>
          <Div >
            <header>Zgonów</header>
            <span style={{ color: '#c11' }}> <AnimatedNumber value={deaths}  formatValue={this.formatValue} /></span>
          </Div>
         </Content>
         </div>
        
      )
    }
  }

  export default Box;