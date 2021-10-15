import './App.css';
import avatar from './img/avatar01.png'
import { Component } from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import React from 'react';

class App extends Component {
  state = {

    fullName: "Anis",
    bio: "bio",
    imgSrc: <img src={avatar} alt="avatar"/>,
    profession: "web dev",
    show: false
  };

  profileShow = () => {
    this.setState({ show: !this.state.show })
  };

  render() {
    return (
      <div>
        <h4 style={{ color: 'blue' }}>SHOW PROFIL : </h4>
        <button onClick={this.profileShow}>
          <IoIosArrowDropright style={{ fontSize: "30px", color: "blue" }}></IoIosArrowDropright>
        </button>
        {this.state.show ?
                (<form>
                  My Name is : {this.state.fullName}<br/>
                  My bio : {this.state.bio}<br/>
                  Photo : {this.state.imgSrc}<br/>
                  Mys profession is: {this.state.profession}
              </form>)
        :<forms/>}

        {/* {this.state.show ? (<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>) : (<p>eee</p>)}  */}

      </div>
    );
  };
};

export default App;
