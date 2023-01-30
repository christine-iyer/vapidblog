import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import { DndContext,closestCenter } from '@dnd-kit/core';
import  { arrayMove, SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import Form from "./components/Form";
import {SortableItem} from "./components/SortableItem"


function App() {
  const [dueDate, setDueDate] = useState(['Yesterday', "Today", 'Tomorrow']);
  return (
    <div className="App">
      <><Form /></>
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
