// components/AutoSave.js
import React, { useEffect } from 'react';

export default function AutoSave({ data, onSave, delay = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSave();
    }, delay);

    return () => clearTimeout(timer);
  }, [data, onSave, delay]);

  return null;
}
