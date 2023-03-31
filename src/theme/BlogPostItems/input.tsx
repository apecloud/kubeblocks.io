import React, { useState } from 'react';
import './input.less';

const Input = (props: any) => {
  
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);

  const handleSearch = () => {
    props?.handleSearch && props.handleSearch(value);
  }
  const keyDown = (e: any) => {
    if (e.keyCode === 13) {
      props?.handleSearch && props.handleSearch(value);
    }
  }
  const handleClear = () => {
    setValue('');
    props?.onChange && props.onChange('');
    props?.handleSearch && props.handleSearch('');
  }
  const handleChange = (e: any) => {
    setValue(e.target.value);
    props?.onChange && props.onChange(e.target.value);
  }
  return (
    <div className={`${focus && 'active-input'} custom-input`}>
      <span onClick={handleSearch} className='icon'>
        <img src='/img/search.png' />
      </span>
      <input
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onKeyDown={keyDown}
      />
      <span onClick={handleClear} className='icon'>
        {!!value.length && <img src='/img/clear.png' />}
      </span>
    </div>
  )
}

export default Input;