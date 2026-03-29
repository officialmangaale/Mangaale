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
    <div className="pt-[72px]">
      <div className="mangaale-container mangaale-section">
        <div className="max-w-4xl mx-auto mangaale-card p-7 md:p-10 lg:p-12">
          <span className="section-eyebrow inline-flex">Legal</span>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4">
            Mangaale Partner Account Deletion
          </h1>
          <p className="text-sm text-mangaale-subtext mb-6">Last updated: March 15, 2026</p>
          <p className="text-mangaale-subtext text-base md:text-lg leading-relaxed max-w-3xl">
            This page explains how users of the Mangaale Partner mobile application can request deletion of their app account and associated data.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className={sectionHeadingClass}>How to Request Account Deletion</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-mangaale-text text-[15px] leading-relaxed marker:text-mangaale-primary">
                <li>
                  Send an email to <a href="mailto:support@mangaale.com" className="text-mangaale-primary hover:underline font-semibold">support@mangaale.com</a> with the subject line <strong>Account Deletion Request</strong>.
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
              <h2 className={sectionHeadingClass}>What Will Be Deleted</h2>
              <ul className={listClass}>
                <li>App account profile information and sign-in access.</li>
                <li>Stored authentication records associated with the app account.</li>
                <li>Restaurant profile data managed through the app, where deletion is permitted and not subject to legal retention requirements.</li>
                <li>Uploaded business images and verification documents.</li>
                <li>Menu, inventory, vendor, referral, staff, and related settings data.</li>
                <li>Notification tokens and in-app operational preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>What May Be Retained</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
                Certain data may be retained where required for legal, regulatory, tax, accounting, fraud prevention, dispute resolution, or security purposes. This may include invoice, payment, order, audit, or compliance records that must be preserved under applicable law or legitimate business obligations.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Processing Time</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
                We aim to process verified deletion requests within 30 days. Backup or archived copies may persist for a limited period before automatic deletion or overwrite, where applicable.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Partial Data Deletion</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed">
                At this time, Mangaale Partner does not provide a separate self-service process for deleting only selected categories of data without also requesting account deletion, unless otherwise required by law.
              </p>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>Contact</h2>
              <p className="text-mangaale-text text-[15px] leading-relaxed mb-2">
                For deletion requests or questions, contact <a href="mailto:support@mangaale.com" className="text-mangaale-primary hover:underline font-semibold">support@mangaale.com</a>.
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
