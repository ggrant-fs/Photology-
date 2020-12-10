import React from 'react';
import ContactHeader from './ContactHeader';
import Form from './Form';
import axios from 'axios';
import {baseURL, config} from '../Services/index'
import {useEffect} from 'react'

const ContactPage = () => {
  
  const apiData = async () => {
    const apiRequest = await axios.get(baseURL, config);
    console.log(apiRequest.data.records);
  };

  //post request
  const formPostRequest = async (formData) => {
    await axios.post(baseURL, { fields: formData }, config);
  };
  useEffect(() => {
    apiData();
  }, [])
    return (
        <div>
          <ContactHeader/>
          <Form formPostRequest={formPostRequest}/>
          
        </div>
    );
};

export default ContactPage;