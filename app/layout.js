import { Space_Grotesk} from "next/font/google";
import "./globals.css";

const spaceGrot = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrot.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
