import { Inter } from "next/font/google";
import "./ui/globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@/redux/providers";
import { ToastContainer } from "react-toastify";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: {
    default: "Quinela",
    template: "%s - Quinela",
  },
  description: "Quinela de la bondad",
};

export default function RootLayout({ children }) {
  const ContainerLayout = {
	// display: "flex",
	// justifyContent:"space-between"
  };
  return (
    <html lang="en">
      <body className={inter.className} style={ContainerLayout}>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
            <ToastContainer />
            {/* <Footer /> */}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
