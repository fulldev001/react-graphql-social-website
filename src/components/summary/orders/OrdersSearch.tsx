import React from 'react'

const OrdersSearch = () => {

  const filterIcon =  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6.5C12 6.36739 11.9473 6.24021 11.8536 6.14645C11.7598 6.05268 11.6326 6 11.5 6H8.5C8.36739 6 8.24021 6.05268 8.14645 6.14645C8.05268 6.24021 8 6.36739 8 6.5C8 6.63261 8.05268 6.75979 8.14645 6.85355C8.24021 6.94732 8.36739 7 8.5 7H11.5C11.6326 7 11.7598 6.94732 11.8536 6.85355C11.9473 6.75979 12 6.63261 12 6.5ZM12 3.5C12 3.36739 11.9473 3.24021 11.8536 3.14645C11.7598 3.05268 11.6326 3 11.5 3H4.5C4.36739 3 4.24021 3.05268 4.14645 3.14645C4.05268 3.24021 4 3.36739 4 3.5C4 3.63261 4.05268 3.75979 4.14645 3.85355C4.24021 3.94732 4.36739 4 4.5 4H11.5C11.6326 4 11.7598 3.94732 11.8536 3.85355C11.9473 3.75979 12 3.63261 12 3.5ZM12 0.5C12 0.367392 11.9473 0.240215 11.8536 0.146447C11.7598 0.0526785 11.6326 0 11.5 0H0.5C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5C0 0.632608 0.0526785 0.759785 0.146447 0.853553C0.240215 0.947321 0.367392 1 0.5 1H11.5C11.6326 1 11.7598 0.947321 11.8536 0.853553C11.9473 0.759785 12 0.632608 12 0.5Z" fill="#556EE6"/>
                      </svg>
  const exportIcon =  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5867 7.26703C12.5016 7.19421 12.3923 7.15617 12.2804 7.16049C12.1686 7.16481 12.0624 7.21118 11.9833 7.29033C11.9041 7.36948 11.8578 7.47559 11.8534 7.58745C11.8491 7.6993 11.8872 7.80867 11.96 7.89369L13.4044 9.33369H7.99999C7.88211 9.33369 7.76907 9.38052 7.68572 9.46387C7.60237 9.54722 7.55554 9.66026 7.55554 9.77814C7.55554 9.89601 7.60237 10.0091 7.68572 10.0924C7.76907 10.1758 7.88211 10.2226 7.99999 10.2226H13.4178L11.96 11.6804C11.9135 11.7202 11.8757 11.7692 11.849 11.8244C11.8223 11.8795 11.8073 11.9396 11.805 12.0008C11.8026 12.062 11.8129 12.123 11.8353 12.1801C11.8576 12.2371 11.8915 12.2889 11.9348 12.3322C11.9781 12.3755 12.0299 12.4094 12.087 12.4318C12.144 12.4541 12.205 12.4644 12.2662 12.462C12.3274 12.4597 12.3875 12.4447 12.4426 12.418C12.4978 12.3913 12.5468 12.3536 12.5867 12.307L15.1111 9.77814L12.5867 7.26703Z" fill="#556EE6"/>
                          <path d="M11.5555 5.48433C11.2117 5.26658 10.9105 4.98795 10.6667 4.66211V6.391H11.5555V5.48433Z" fill="#556EE6"/>
                          <path d="M2.66666 6.04845H6.04888V2.66623H9.99999C10.0012 2.36568 10.043 2.06666 10.1244 1.77734H4.8311L1.77777 4.83068V13.3329C1.77777 13.5686 1.87142 13.7947 2.03812 13.9614C2.20482 14.1281 2.43091 14.2218 2.66666 14.2218H10.6667C10.9024 14.2218 11.1285 14.1281 11.2952 13.9614C11.4619 13.7947 11.5555 13.5686 11.5555 13.3329H2.66666V6.04845ZM2.66666 5.19512L5.19555 2.66623H5.33333V5.3329H2.66666V5.19512Z" fill="#556EE6"/>
                          <path d="M13.3333 4.88878C14.5606 4.88878 15.5556 3.89386 15.5556 2.66656C15.5556 1.43926 14.5606 0.444336 13.3333 0.444336C12.106 0.444336 11.1111 1.43926 11.1111 2.66656C11.1111 3.89386 12.106 4.88878 13.3333 4.88878Z" fill="#556EE6"/>
                      </svg>

  return (
    <div className="orders-wrapper">      
      <div className="grid grid-cols-8 gap-8 item-center pl-32 mt-4 mb-2">        
        <div className="relative col-span-6 ... "> 
            <div className="absolute left-6 top-5">
                <img src="../../assets/img/summary/bluejestic/search_icon.svg" alt="search" className="search-icon" />
            </div>
            <input type="text" placeholder="Search for order ID, Brands, Order status" 
              className="bg-gray-200 border-grey-300 rounded-2xl h-16 w-full py-3 px-16" />
        </div>
        <div className="col-span-1 w-full " >
          <button className="text-indigo-500 flex justify-center bg-white border rounded-2xl h-16 w-full py-4">
            {filterIcon}
            <div className="-my-2 hover:text-indigo-700 hover:font-semibold">&nbsp;&nbsp;Filters</div>
          </button>
        </div> 
        <div className="col-span-1 w-full" >
          <button className="text-indigo-500 flex justify-center bg-white rounded-2xl border h-16 w-full py-3">
            {exportIcon}
            <div className="-my-1 hover:text-indigo-700 hover:font-semibold">&nbsp;&nbsp;Export</div>
          </button>
        </div>        
      </div>
    </div>
  )
}
export default OrdersSearch;