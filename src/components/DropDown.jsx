import { useState, useEffect, useRef } from "react";

const DropDown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);


  return (
    <>
      <div className="dropdown" ref={dropdownRef}>
        <button onClick={toggleDropDown} className='dropdown-btn'>Dropdown Menu</button>
        {
          isOpen && (
            <ul className='dropdown-menu'>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )
        }
      </div>
    </>
  )
}

export default DropDown;