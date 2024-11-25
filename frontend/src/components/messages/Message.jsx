
const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='tailwind css chat bubble component' src={"https://jichangwookkitchen.com/wp-content/uploads/2017/06/10plus14_jcwk.jpg?w=584"}/>

            </div>
        </div>
        <div className={`chat-bubble text-white bg-orange-400`}>
            Hi! how are you?
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-300'>
            12:42
        </div>

    </div>
  )
}

export default Message