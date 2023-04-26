import Illustration from "./Illustration.js";
import Description from "./Description.js";
import Attribution from "./Attribution__BS.js";

const App = () => {

  return (
    <>
      <div className='page d-flex flex-column align-items-center justify-content-center flex-sm-row'>
        <Illustration />
        <Description />
      </div>
        <Attribution />
    </>
  )
};

export default App;