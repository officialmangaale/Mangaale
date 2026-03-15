import SectionReveal from '../components/shared/SectionReveal'
import usePageMeta from '../hooks/usePageMeta'

const PrivacyPolicyPage = () => {
  usePageMeta(
    'Privacy Policy',
    'Privacy Policy for the Mangaale Partner mobile application, including data collection, use, sharing, retention, and user choices.'
  )

  return (
    <div className="pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-5xl pt-24">
        <div className="mangaale-shell p-8 md:p-10 lg:p-12">
          <p className="section-eyebrow inline-flex">Legal</p>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">Mangaale Partner Privacy Policy</h1>
          <p className="mt-4 text-sm text-mangaale-ink-soft">Last updated: March 15, 2026</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mangaale-ink-soft md:text-lg">
            This Privacy Policy explains how Mangaale ("Mangaale", "we", "us", or "our") collects, uses, stores, and shares information when you use the Mangaale Partner mobile application (the "App"). The App is built for restaurant owners and staff to manage restaurant operations, orders, menus, inventory, reports, and related services.
          </p>

          <div className="mt-10 space-y-10 text-mangaale-ink-soft">
            <section>
              <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li><strong className="text-white">Account and profile information:</strong> name, email address, phone number, password, business name, role, and related sign-in or verification details.</li>
                <li><strong className="text-white">Restaurant and business information:</strong> restaurant name, owner name, restaurant type, address, city, state, postal code, UPI ID, GST number, FSSAI number, and similar business or compliance details.</li>
                <li><strong className="text-white">Verification documents and uploaded media:</strong> Aadhaar card, PAN card, FSSAI license, GST certificate, business logo, background images, menu or item images, and other files or images you choose to upload.</li>
                <li><strong className="text-white">Operational data:</strong> menu items, orders, invoices, receipts, analytics, reports, inventory records, recipe data, printer preferences, vendor records, staff details, referrals, and other information entered or generated while using the App.</li>
                <li><strong className="text-white">Customer and order-related information:</strong> order details, item selections, payment status, delivery information, invoice records, and related restaurant transaction data that is available to your restaurant account.</li>
                <li><strong className="text-white">Location information:</strong> precise location may be collected when you grant permission so your restaurant can be placed accurately for location-based features such as nearby restaurant discovery and restaurant location updates.</li>
                <li><strong className="text-white">Nearby device and Bluetooth information:</strong> the App may access Bluetooth and nearby device permissions to scan for and connect to compatible printers. On some Android versions, location permission may also be required by the operating system for printer discovery.</li>
                <li><strong className="text-white">Notification data:</strong> push notification tokens and related messaging identifiers used to send order alerts and other important service notifications.</li>
                <li><strong className="text-white">Voice and AI inputs:</strong> if you use voice typing or AI-powered features, your device or its speech recognition provider may process microphone input to convert speech into text. We may receive and process the resulting transcript, along with related business context, to provide intelligence, assistant, or copilot responses.</li>
                <li><strong className="text-white">Technical and usage information:</strong> device type, operating system, app version, IP address, logs, and general usage information needed to operate, secure, and improve the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">2. How We Use Information</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li>To create and manage your account and authenticate users.</li>
                <li>To register, manage, and verify restaurant profiles.</li>
                <li>To process and display orders, invoices, receipts, and reports.</li>
                <li>To manage inventory, menu items, vendors, staff, and referrals.</li>
                <li>To enable printer pairing and printing workflows.</li>
                <li>To send push notifications and important operational alerts.</li>
                <li>To update restaurant location and support location-based discovery.</li>
                <li>To power AI or assistant features, including business insights and text-based responses based on your submitted queries.</li>
                <li>To maintain security, prevent misuse, troubleshoot issues, and improve the App and related services.</li>
                <li>To comply with legal, tax, accounting, and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">3. How We Share Information</h2>
              <p className="mt-4 leading-relaxed">
                We do not sell your personal information. We may share information in the following limited circumstances:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li><strong className="text-white">Service providers and infrastructure partners</strong> that help us operate the App, such as hosting, storage, notifications, maps or location services, speech recognition, and support tools.</li>
                <li><strong className="text-white">Technology platforms integrated with the App,</strong> such as Firebase Cloud Messaging for notifications, map or geolocation providers, and device-level speech recognition services.</li>
                <li><strong className="text-white">Your authorized users or staff</strong> within your restaurant account, based on the access you provide.</li>
                <li><strong className="text-white">Legal or compliance disclosures</strong> when required by law, regulation, court order, or to protect rights, safety, and the integrity of the service.</li>
                <li><strong className="text-white">Business transfers</strong> in connection with a merger, acquisition, restructuring, financing, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">4. Data Retention</h2>
              <p className="mt-4 leading-relaxed">
                We retain information for as long as needed to provide the App, maintain your account, comply with legal and accounting obligations, resolve disputes, and enforce our agreements. Certain business, invoice, tax, or compliance records may be retained for longer where required by law or legitimate business needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">5. Your Choices</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li>You can update certain profile, restaurant, menu, and operational information directly within the App.</li>
                <li>You can disable location, microphone, Bluetooth, camera, or notification permissions through your device settings, but some App features may stop working properly.</li>
                <li>You may request account or data deletion by contacting us using the details below, subject to legal or operational retention requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">6. Security</h2>
              <p className="mt-4 leading-relaxed">
                We use reasonable technical, administrative, and organizational safeguards to protect information. However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">7. Children's Privacy</h2>
              <p className="mt-4 leading-relaxed">
                The App is intended for business use by restaurant owners and staff and is not directed to children under 13. We do not knowingly collect personal information directly from children under 13 through the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">8. Changes to This Policy</h2>
              <p className="mt-4 leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date in this policy. Continued use of the App after an update means the updated policy will apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">9. Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have any questions, privacy requests, or concerns about this Privacy Policy, contact us at <a href="mailto:support@mangaale.com" className="text-mangaale-accent hover:underline">support@mangaale.com</a>.
              </p>
              <p className="mt-2 leading-relaxed">
                Website: <a href="https://mangaale.com" className="text-mangaale-accent hover:underline">https://mangaale.com</a>
              </p>
            </section>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default PrivacyPolicyPage
