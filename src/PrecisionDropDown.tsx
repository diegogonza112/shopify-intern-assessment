import React, { ChangeEventHandler, useState } from 'react';

interface DropDownProps {
    onChange: ChangeEventHandler<HTMLSelectElement>,
    selectedOption: string
}

export default function PrecisionDropDown(props: DropDownProps) {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  return (
      <select value={props.selectedOption} onChange={props.onChange}>
        <option value="Seconds">Seconds</option>
        <option value="Deciseconds">Deciseconds</option>
        <option value="Centiseconds">Centiseconds</option>
      </select>
  );
}

 