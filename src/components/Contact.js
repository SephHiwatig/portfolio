import React from 'react';
import styled from 'styled-components';
import Button from './extras/Button';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_wxz7nt5', e.target, 'user_fRqnfGysVH7dHYBJ2Dfs0')
          .then((result) => {
            //   console.log(result.text);
          }, (error) => {
            //   console.log(error.text);
          });
        
        e.target.reset();
    }


    return <Wrapper>
        <Title>Contact me</Title>
        <ContactForm onSubmit={sendEmail}>
            <InputWrapper>
                <input type="text" placeholder="Email" name="name"></input>
            </InputWrapper>
            <InputWrapper>
                <input type="text" placeholder="Subject" name="subject"></input>
            </InputWrapper>
            <InputWrapper>
                <textarea rows="3" placeholder="Message" name="message"/>
            </InputWrapper>
            <InputWrapper>
                <Button label="Send message" type="submit"/>
            </InputWrapper>
        </ContactForm>
    </Wrapper>
};

const Wrapper = styled.div`
    margin: 16px 2%;
    color: #525e65;
    text-align: center;

    @media(min-width: 768px) {
        margin: 16px 15%;
    }

    @media(min-width: 1200px) {
        margin: 16px 25%;
    }
`;

const Title = styled.h2`
    position: relative;
    margin: 0;
`;

const ContactForm = styled.form`

    & input,textarea {
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        margin: 8px 0;
    }

    & input:focus,textarea:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }

`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default Contact;