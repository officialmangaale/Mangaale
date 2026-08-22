import SectionReveal from '../components/shared/SectionReveal'
import usePageMeta from '../hooks/usePageMeta'

const AccountDeletionPage = () => {
  usePageMeta(
    'Account Deletion',
    'How users of the Mangaale Partner app can request account deletion and understand what data may be deleted or retained.'
  )

  const sectionHeadingClass = "text-2xl font-bold text-mangaale-text mb-4"
  const listClass = "mt-4 list-disc space-y-3 pl-6 text-mangaale-text text-[15px] leading-relaxed marker:text-mangaale-primary"

  return (
<<<<<<< HEAD
    <div className="pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-5xl pt-24">
        <div className="mangaale-shell p-8 md:p-10 lg:p-12">
          <p className="section-eyebrow inline-flex">Legal</p>
          <h1 className="mt-6 text-4xl font-bold text-mangaale-text md:text-5xl">Mangaale Partner Account Deletion</h1>
          <p className="mt-4 text-sm text-mangaale-subtext">Last updated: March 15, 2026</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mangaale-subtext md:text-lg">
=======
    <div className="pt-[72px]">
      <div className="mangaale-container mangaale-section">
        <div className="max-w-4xl mx-auto mangaale-card p-7 md:p-10 lg:p-12">
          <span className="section-eyebrow inline-flex">Legal</span>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4">
            Mangaale Partner Account Deletion
          </h1>
          <p className="text-sm text-mangaale-subtext mb-6">Last updated: March 15, 2026</p>
          <p className="text-mangaale-subtext text-base md:text-lg leading-relaxed max-w-3xl">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
            This page explains how users of the Mangaale Partner mobile application can request deletion of their app account and associated data.
          </p>

          <div className="mt-10 space-y-10">
            <section>
<<<<<<< HEAD
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">How to Request Account Deletion</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed">
                <li>
                  Send an email to <a href="mailto:support@mangaale.com" className="text-mangaale-primary hover:underline">support@mangaale.com</a> with the subject line <strong className="font-semibold text-mangaale-text">Account Deletion Request</strong>.
=======
              <h2 className={sectionHeadingClass}>How to Request Account Deletion</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-mangaale-text text-[15px] leading-relaxed marker:text-mangaale-primary">
                <li>
                  Send an email to <a href="mailto:support@mangaale.com" className="text-mangaale-primary hover:underline font-semibold">support@mangaale.com</a> with the subject line <strong>Account Deletion Request</strong>.
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                </li>
                <li>
                  Include the account email address, phone number, restaurant name, and any other identifying details needed to verify ownership of the account.
                </li>
                <li>
                  We may contact you to verify your identity before processing the deletion request.
                </li>
              </ol>
            </section>

            <section>
<<<<<<< HEAD
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">What Will Be Deleted</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
=======
              <h2 className={sectionHeadingClass}>What Will Be Deleted</h2>
              <ul className={listClass}>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                <li>App account profile information and sign-in access.</li>
                <li>Stored authentication records associated with the app account.</li>
                <li>Restaurant profile data managed through the app, where deletion is permitted and not subject to legal retention requirements.</li>
                <li>Uploaded business images and verification documents.</li>
                <li>Menu, inventory, vendor, referral, staff, and related settings data.</li>
                <li>Notification tokens and in-app operational preferences.</li>
              </ul>
            </section>

            <section>
<<<<<<< HEAD
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">What May Be Retained</h2>
              <p className="mt-4 leading-relaxed">
=======
              <h2 className={sectionHeadingClass}>What May Be Retained</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                Certain data may be retained where required for legal, regulatory, tax, accounting, fraud prevention, dispute resolution, or security purposes. This may include invoice, payment, order, audit, or compliance records that must be preserved under applicable law or legitimate business obligations.
              </p>
            </section>

            <section>
<<<<<<< HEAD
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">Processing Time</h2>
              <p className="mt-4 leading-relaxed">
=======
              <h2 className={sectionHeadingClass}>Processing Time</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                We aim to process verified deletion requests within 30 days. Backup or archived copies may persist for a limited period before automatic deletion or overwrite, where applicable.
              </p>
            </section>

            <section>
<<<<<<< HEAD
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">Partial Data Deletion</h2>
              <p className="mt-4 leading-relaxed">
=======
              <h2 className={sectionHeadingClass}>Partial Data Deletion</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                At this time, Mangaale Partner does not provide a separate self-service process for deleting only selected categories of data without also requesting account deletion, unless otherwise required by law.
              </p>
            </section>

            <section>
<<<<<<< HEAD
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">Contact</h2>
              <p className="mt-4 leading-relaxed">
                For deletion requests or questions, contact <a href="mailto:support@mangaale.com" className="text-mangaale-primary hover:underline">support@mangaale.com</a>.
=======
              <h2 className={sectionHeadingClass}>Contact</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed mb-2">
                For deletion requests or questions, contact <a href="mailto:support@mangaale.com" className="text-mangaale-primary hover:underline font-semibold">support@mangaale.com</a>.
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              </p>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
                Website: <a href="https://mangaale.com" className="text-mangaale-primary hover:underline font-semibold">https://mangaale.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDeletionPage
