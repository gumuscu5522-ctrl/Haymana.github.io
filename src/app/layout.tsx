import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Haymana | Termal Turizm ve Keşif",description:"Haymana'nın termal kaynakları, doğası, tarihi ve gezilecek yerleri."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}