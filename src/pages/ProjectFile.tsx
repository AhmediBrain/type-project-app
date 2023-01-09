import React from 'react'
import { useState } from 'react';

export enum Subject {
  Physics = "Good Subject",
  Chemistry = "Wow cool Subject",
  Accounting = "Good to know",
}

interface IAppProps {
  name: string;
  age: number;
  subject: Subject;
}

 
export const ProjectFile: React.FunctionComponent<IAppProps> = ({name, age, subject}) => {
  const [country, setCountry] = useState(null)

  const handleChange = (e: any) => {
    setCountry(e.target.value);
  }


  return(
    <div>
      <h1>Hello {name}</h1>
      <h1>{age}</h1>
      <input placeholder='write your country name...' 
        onChange={handleChange} />

      <p>{country}</p>
      <p>{subject}</p>
    </div>
  );
}


