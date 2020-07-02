import styled from "styled-components";
import { useState } from 'react';
import React from "react";

const Wrapper = styled.section`
font-size:24px;
> ul{
  display: flex;
  
  > li {
    width:50%;
    text-align: center;
    background: white;
    padding:  16px 0;
    position: relative;
    &.selected::after{
      content: '';
      display: block;
      height: 3px;
      background:#16B8FF;
   
      position: absolute;
      width: 100%;
      left: 0;
      bottom:0;

      
    }
  }
}

`;

type Props = {
  value:'-' |'+',
  onChange:(value:'-' | '+') =>void;
}

    const CategorySection:React.FC<Props> = (props) => {
    const categoryMap = {'-':'支出','+':'收入'};
    const [categoryList] = useState<('+'|'-')[]>(['-','+']);
    const category = props.value;
    return (
      <Wrapper>
        <ul>
          {categoryList.map(c=>
            <li key={c} 
            className={category === c ? 'selected' : ''}
                 onClick={() =>{props.onChange(c);}}
                 >{categoryMap[c]}
                 </li>  
                 )}
        </ul>
      </Wrapper>
    )
  }




export {CategorySection};