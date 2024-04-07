import { Inter } from "next/font/google";
import "./ui/globals.css";
import Link from 'next/link'
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@/redux/providers";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
export const metadata = {
  title: {
    default : "Quinela",
    template : "%s - Quinela"
  },
  description: "Quinela de la bondad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
        <Providers>
          <div>
            {/* <nav>
              <Link href='/login'>Ingresar</Link>
              <Link href='/login'>Registrarse</Link>
            </nav> */}
          {children}
          </div>
        </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
