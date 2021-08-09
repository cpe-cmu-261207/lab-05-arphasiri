import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';

function AppTodo() {

  return (
    <div>

      {/* header section */}
        <Header title={"Minimal Todo List "}
        name={" Arphasiri Khong-ngoen "} id={ 630610771} ></Header>
     
      {/* todo section */}
      <Todo></Todo>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default AppTodo;
