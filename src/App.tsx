import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import Home from "./page/Home/home";
import CellPhoneRepair from "./page/Businesses/CellPhoneRepair/cellphonerepair";
import ComputerRepair from "./page/Businesses/ComputerRepair/ComputerRepair";
import PrepaidWireless from "./page/Businesses/PrepaidWirelesss/PrepaidWireless";
import Check_in from "./page/Features/Check_IN/Check_in";
import TicketManagement from "./page/Features/TicketManagement/TicketManagement";
import Integrated_payment from "./page/Features/IntegratedPayment/Integrated_payment";
import Customer_Management from "./page/Features/CustomerManagement/Customer_Management";
import Employ_Management from "./page/Features/EmployManagement/Employ_Management";
import Smart_Display from "./page/Features/SmartDisplay/Smart_Display";
import TeamCommunication from "./page/Features/TeamCommunication/TeamCommunication";
import SaffScheduling from "./page/Features/StaffScheduling/SaffScheduling";
import InventoryManagement from "./page/Features/InventoryManagement/InventoryManagement";
import StockCounting from "./page/Features/StockCounting/StockCounting";
import PurchaseOrders from "./page/Features/PurchaseOrders/PurchaseOrders";
import RMA_Management from "./page/Features/RMA_Management/RMA_Management";
import TermOfService from "./page/FooterPage/TermOfService/TermOfService";
import DataPolicy from "./page/FooterPage/DataPolicy/DataPolicy";
import PrivacyPolicy from "./page/FooterPage/PrivacyPolicy/PrivacyPolicy";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Businesses/CellPhoneRepair/cellphonerepair" element={<CellPhoneRepair />} />
        <Route path="/Businesses/ComputerRepair/ComputerRepair" element={<ComputerRepair />}  />
        <Route path="/Businesses/PrepaidWirelesss/PrepaidWireless" element={<PrepaidWireless />} />
        <Route path="/Features/Check_IN/Check_in" element={<Check_in />} />
        <Route path="/Features/TicketManagement/TicketManagement" element={<TicketManagement />} />
        <Route path="/Features/IntegratedPayment/Integrated_payment" element={<Integrated_payment />} />
        <Route path="/Features/CustomerManagement/Customer_Management" element={<Customer_Management />} />
        <Route path="/Features/EmployManagement/Employ_Management" element={<Employ_Management />} />
        <Route path="/Features/SmartDisplay/Smart_Display" element={<Smart_Display />} />
        <Route path="/Features/TeamCommunication/TeamCommunication" element={<TeamCommunication />} />
        <Route path="/Features/StaffScheduling/SaffScheduling" element={<SaffScheduling />} />
        <Route path="/Features/InventoryManagement/InventoryManagement" element={<InventoryManagement />} />
        <Route path="/Features/StockCounting/StockCounting" element={<StockCounting />} />
        <Route path="/Features/PurchaseOrders/PurchaseOrders" element={<PurchaseOrders />} />
        <Route path="/Features/RMA_Management/RMA_Management" element={<RMA_Management />} />
        <Route path="/FooterPage/TermOfService/TermOfService" element={<TermOfService />} />
        <Route path="/FooterPage/DataPolicy/DataPolicy" element={<DataPolicy />} />
        <Route path="/FooterPage/PrivacyPolicy/PrivacyPolicy" element={<PrivacyPolicy />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

