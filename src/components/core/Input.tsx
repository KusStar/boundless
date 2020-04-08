import styled from 'styled-components'

interface Props {
 
}

const Input = styled.input<Props>`
  padding: 4px 12px;
  position: relative;
  display: inline-block;
  width: 100%;
  color: #000;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  list-style: none;
  transition: all 0.3s;
  
  &:hover {
    border-color: #40a9ff;
  }
  &:focus {
    outline: 0;
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24,144,255, 0.2);
  }
`

export default Input
