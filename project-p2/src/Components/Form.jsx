import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={};
    }
    render() {
        return (
          <form>
              <label htmlfor=""></label>
              <input type="text" name="" placeholder=""/>
              <label htmlfor=""></label>
              <input type="text" name="" placeholder=""/>
              <label htmlfor=""></label>
              <input type="text" name="" placeholder=""/>
              <label htmlfor=""></label>
              <input type="text" name="" placeholder=""/>
          </form>
        );
    }
}

export default Form;