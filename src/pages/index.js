import { useState, useEffect } from 'react';
import TextEditor from '../components/TextEditor';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const [editorRef, setEditorRef] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const registerEditor = (ref) => {
    setEditorRef(ref);
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <TextEditor registerEditor={registerEditor} />
    </>
  );
}



