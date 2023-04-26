const Illustration = () => {

  const User = () => (
    <header className='user d-flex flex-row align-items-center p-5 pb-2'>
      <i className='fa fa-chevron-left mx-2'></i>
      <ReactBootstrap.Image className='avatar mx-2' alt='avatar' src='./src/images/avatar.jpg' />
      <div className='d-flex flex-column ms-2 me-4'>
        <p className='name my-0 fw-bold'>Samuel Green</p>
        <p className='status my-0'>Available to Walk</p>
      </div>
      <i className='fa fa-ellipsis-v ms-4'></i>
    </header>
  );

  const Chat = () => {
    const radioBtn1 = React.useRef(null);
    const radioBtn2 = React.useRef(null);

    return (
      <section className='chat container-fluid p-3' id='chat'>
        <p className='other row w-50 p-2 ms-0'>That sounds great. I’d be happy with that.</p>
        <p className='other row w-50 p-2 ms-0'>Could you send over some pictures of your dog, please?</p>
        <div className='gallery row w-50 gx-3 mb-3 me-0'>
          <ReactBootstrap.Image className='col-4 img-thumbnail p-0' alt='dog image one' src='./src/images/dog-image-1.jpg' />
          <ReactBootstrap.Image className='col-4 img-thumbnail p-0' alt='dog image two' src='./src/images/dog-image-2.jpg' />
          <ReactBootstrap.Image className='col-4 img-thumbnail p-0' alt='dog image three' src='./src/images/dog-image-3.jpg' />
        </div>
        <p className='self row w-50 p-2'>Here are a few pictures. She’s a happy girl!</p>
        <p className='self row w-50 p-2'>Can you make it?</p>
        <p className='other row w-50 p-2 ms-0'>She looks so happy! The time we discussed works. How long shall I take her out for?</p>
        <div className='form-check radio row w-50 mb-3 ms-0 p-2 d-flex flex-nowrap flex-row align-items-center justify-content-center'>
          <input ref={radioBtn1} className='form-check-input p-0 my-0 ms-3' type='radio' value='29' name='radio'/>
          <label htmlFor={radioBtn1.current} className='form-check-label p-0 m-0'>
            <span className='form-check-text ms-2 me-1 align-middle'>30 minute walk</span>
            <span className='form-check-text fs-6 fw-bold ms-2'>$29</span>
          </label>
        </div>
        <div className='form-check radio row w-50 mb-3 ms-0 p-2 d-flex flex-nowrap flex-row align-items-center justify-content-center'>
          <input ref={radioBtn2} className='form-check-input p-0 my-0 ms-3' type='radio' value='49' name='radio' />
          <label htmlFor={radioBtn2.current} className='form-check-label p-0 m-0'>
            <span className='form-check-text mx-2 align-middle'>1 hour walk</span>
            <span className='form-check-text fs-6 fw-bold ms-4'>$49</span>
          </label>
        </div>
      </section>
    );
  }

  const Post = () => {
    const textArea = React.useRef(null);
    const createPost = () => {
      document.getElementById('chat').insertAdjacentHTML('beforeend', `<p class='self row w-50 p-2'>${textArea.current.value}</p>`);
      textArea.current.value = '';
    }

    return (
      <footer className='post position-relative mx-3 mb-3'>
        <textarea ref={textArea} className='form-control textarea p-3' placeholder='Type a message...' rows='1' cols='40' autoComplete='off' spellCheck='off' wrap='hard'></textarea>
        <ReactBootstrap.Button className='rounded-circle position-absolute' onClick={createPost}><i className='fa fa-chevron-right'></i></ReactBootstrap.Button>
      </footer>
    );
  }
  
  return (
    <div className='illustration position-relative my-5 p-3'>
      <ReactBootstrap.Button className='rounded-pill position-absolute' ></ReactBootstrap.Button>
      <main className='main pb-2'>
        <User />
        <Chat />
        <Post />
      </main>
    </div>
  );
}

export default Illustration;