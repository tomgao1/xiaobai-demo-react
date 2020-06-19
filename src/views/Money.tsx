import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';
import { useState } from 'react';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction:column;
`;

type Category = '-' |'+'


function Money() {
  const [selected,setSelected] = useState({
    tags: [] as string[],
    note:'',
    category:'-'as Category,
    amount:0
  });
  return (
    <MyLayout>
     {selected.tags.join(',')}
     <hr/>
     {selected.note}
     <hr/>
     {selected.amount}
     <TagsSection value={selected.tags}
                  onChange={(tags) => setSelected({
                    ...selected,
                     tags:tags
                  })}/>
    <NoteSection value={selected.note}
                 onChange={(note) =>{
                   setSelected({
                     ...selected,
                      note:note
                   });
                 }}/>
     <CategorySection value={selected.category}
                             onChange={(category)=>{
                               setSelected({
                                 ...selected,
                                 category:category
                               })
                             }}/> 
       <NumberPadSection value={selected.amount}
                         onChange={(amout) => {
                           setSelected({
                             ...selected,
                             amount:amout
                           });
                         }} 
/>






    </MyLayout>
  );
}

export default Money;
