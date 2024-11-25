
const Conversation = () => {
  return <>
    <div className='flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://jichangwookkitchen.com/wp-content/uploads/2017/06/10plus14_jcwk.jpg?w=584" alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>Ji Changwook</p>
                <span className='text-xl'>❤️</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
}

export default Conversation




/*
const Conversation = () => {
    return <>
      <div className='flex gap-2 items-center hover:bg-orange-400 rounded p-2 py-1 cursor-pointer'>
          <div className='avatar online'>
              <div className='w-12 rounded-full'>
                  <img src="https://jichangwookkitchen.com/wp-content/uploads/2017/06/10plus14_jcwk.jpg?w=584" alt="user avatar" />
              </div>
          </div>
          <div className='flex flex-col flex-1'>
              <div className='flex gap-3 justify-between'>
                  <p className='font-bold text-gray-200'>Ji Changwook</p>
                  <span className='text-xl'>❤️</span>
              </div>
          </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
      </>
  }
  
  export default Conversation
  */