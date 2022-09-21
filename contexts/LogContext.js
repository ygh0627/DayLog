import React, {createContext, useEffect, useRef, useState} from 'react';
import {v4} from 'uuid';
import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  const initialLogsRef = useRef(null);

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

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
