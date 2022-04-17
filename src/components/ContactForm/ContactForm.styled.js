import styled from "@emotion/styled";

export const Form = styled.form`
margin-bottom: 50px;`

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
export const Text = styled.span`
font-weight: 300px;
margin-bottom: 5px;`

export const Input = styled.input`
height: 40px;
width: 300px;
padding: 0 10px 0 10px;
&::placeholder {
    font-size: 12px;
    color: blue;
  }`

export const AddContactBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;

width: 200px;
height: 40px;

background-color: #4b4b4b;
color: white;
font-size: 15px;
border: none;
border-radius: 4px;

cursor: pointer;
/* backgroundColor: #4b4b4b; */
transition: background-color var(--main-hover-animation);`