 import { createContext, useContext, useRef } from "react";

 const ScrollContext = createContext();

export default function ScrollContextComponent({ children }) {
   const aboutRef = useRef(null);
  const feature = useRef(null);
   const faq = useRef(null);
 return (
   <ScrollContext.Provider value={{ aboutRef, feature, faq }}>
     {children}
 </ScrollContext.Provider>
 );}
 
export function useComponent() {
 const context = useContext(ScrollContext);
 if (context === undefined) throw new Error("outside the component");
 return context;
}
