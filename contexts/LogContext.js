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

  function onModify(modified) {
    const newLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(newLogs);
  }

  function onRemove(id) {
    const newLogs = logs.filter(log => log.id !== id);
    setLogs(newLogs);
  }
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
