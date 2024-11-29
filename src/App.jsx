import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './pages/dashboard/Dashboard';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';
import Sales from './pages/sales/Sales';
import Services from './pages/services/Services';
import Settings from './pages/settings/Settings';
import Payment from './pages/profile/payment/Payment';
import PaymentHistory from './pages/profile/payment-history/PaymentHistory';
import ProfileSettings from './pages/profile/profil/Profil';
import Referal from './pages/profile/referal/Referal';
import Users from './pages/profile/users/Users';
import TransferShop from './pages/profile/transfer/Transfer';
import Newsletter from './pages/marketing/newsletter/newsletter';
import QrCode from './pages/marketing/qr-code/qrCode';
import Promocode from './pages/marketing/promocode/Promocode';
import TgChannels from './pages/marketing/tg-channels/tgChannels';
import Telegram from './pages/customers/telegramm/Telegramm';
import Whatsapp from './pages/customers/whatsapp/Whatsapp';
import Ecommerce from './pages/customers/ecommerce/Ecommerce';
import VebSite from './pages/platforms/veb-site/VebSite';
import TelegramBot from './pages/platforms/telegram/Telegram';
import WhatsApp from './pages/platforms/whatsapp/WhatsApp';
import Design from './pages/settings/design/Design';
import About from './pages/settings/about/About';
import General from './pages/settings/general/General';
import Post from './pages/post/Post'

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex-col flex-grow">
        <Panel />

        <div className="flex-1 h-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />

            {/* Customers Pages */}
            <Route path="/telegram" element={<Telegram />} />
            <Route path="/whatsapp" element={<Whatsapp />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* Marketing Pages */}
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/qr-code" element={<QrCode />} />
            <Route path="/promocode" element={<Promocode />} />
            <Route path="/tg-channels" element={<TgChannels />} />

            {/* Platforms Pages */}
            <Route path="/veb-sayt" element={<VebSite />} />
            <Route path="/telegram-bot" element={<TelegramBot />} />
            <Route path="/whats-app" element={<WhatsApp />} />

            {/* Sales and Services */}
            <Route path="/sales" element={<Sales />} />
            <Route path="/services" element={<Services />} />

            {/* Settings Pages with Nested Routes */}
            <Route path="/settings" element={<Settings />}>
              {/* Default (index) route */}
              <Route index element={<General />} />
              <Route path="general" element={<General />} />
              <Route path="design" element={<Design />} />
              <Route path="about" element={<About />} />
            </Route>

            {/* Profile Pages */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/referal" element={<Referal />} />
            <Route path="/users" element={<Users />} />
            <Route path="/post" element={<Post />} />
            <Route path="/transfer-shop" element={<TransferShop />} />

            {/* Fallback Route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
