import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import { DndContext,closestCenter } from '@dnd-kit/core';
import  { arrayMove, SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';

import {SortableItem} from "../../components/SortableItem"
import Blogs from "../BlogPage/Blogs"
import CreateBlog from '../../components/CreateBlog/CreateBlog'

function App() {
  const [dueDate, setDueDate] = useState(['Yesterday', "Today", 'Tomorrow']);





  return (
    <div className="App">
 <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      >
        <Container className='p-3' style={{"width":"50%"}} align="center"
        >
        <h3>Deadline</h3>
        <SortableContext
        items={dueDate}
        strategy={verticalListSortingStrategy}
        >

          {dueDate.map(date=><SortableItem key={date} id={date}></SortableItem>)}


        </SortableContext>
        </Container>

      </DndContext>

      <div className='create'>
      <><CreateBlog /></>
     </div>

     <div className='blog'>
      <Blogs />


     </div>
     
    </div>
  );
  function handleDragEnd(event){
    const {active, over}=event
    console.log('Active: '+ active.id)
    console.log('Over: '+ over.id)

    if(active.id !== over.id) {
      setDueDate((date)=> {
        const activeIndex = date.indexOf(active.id)
        const overIndex = date.indexOf(over.id)
        console.log(arrayMove(date,activeIndex,overIndex))

        return arrayMove(date,activeIndex,overIndex)

      })
    }



  }


}

export default App;
