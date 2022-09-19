import React, {createContext, useState} from 'react';
import {v4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);

  function onCreate({title, body, date}) {
    const log = {
      id: v4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  }

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
