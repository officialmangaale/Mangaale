import SectionReveal from '../components/shared/SectionReveal'
import usePageMeta from '../hooks/usePageMeta'

const AccountDeletionPage = () => {
  usePageMeta(
    'Account Deletion',
    'How users of the Mangaale Partner app can request account deletion and understand what data may be deleted or retained.'
  )

  return (
    <div className="pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-5xl pt-24">
        <div className="mangaale-shell p-8 md:p-10 lg:p-12">
          <p className="section-eyebrow inline-flex">Legal</p>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">Mangaale Partner Account Deletion</h1>
          <p className="mt-4 text-sm text-mangaale-ink-soft">Last updated: March 15, 2026</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-mangaale-ink-soft md:text-lg">
            This page explains how users of the Mangaale Partner mobile application can request deletion of their app account and associated data.
          </p>

          <div className="mt-10 space-y-10 text-mangaale-ink-soft">
            <section>
              <h2 className="text-2xl font-semibold text-white">How to Request Account Deletion</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed">
                <li>
                  Send an email to <a href="mailto:support@mangaale.com" className="text-mangaale-accent hover:underline">support@mangaale.com</a> with the subject line <strong className="text-white">Account Deletion Request</strong>.
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
              <h2 className="text-2xl font-semibold text-white">What Will Be Deleted</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li>App account profile information and sign-in access.</li>
                <li>Stored authentication records associated with the app account.</li>
                <li>Restaurant profile data managed through the app, where deletion is permitted and not subject to legal retention requirements.</li>
                <li>Uploaded business images and verification documents.</li>
                <li>Menu, inventory, vendor, referral, staff, and related settings data.</li>
                <li>Notification tokens and in-app operational preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">What May Be Retained</h2>
              <p className="mt-4 leading-relaxed">
                Certain data may be retained where required for legal, regulatory, tax, accounting, fraud prevention, dispute resolution, or security purposes. This may include invoice, payment, order, audit, or compliance records that must be preserved under applicable law or legitimate business obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">Processing Time</h2>
              <p className="mt-4 leading-relaxed">
                We aim to process verified deletion requests within 30 days. Backup or archived copies may persist for a limited period before automatic deletion or overwrite, where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">Partial Data Deletion</h2>
              <p className="mt-4 leading-relaxed">
                At this time, Mangaale Partner does not provide a separate self-service process for deleting only selected categories of data without also requesting account deletion, unless otherwise required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-4 leading-relaxed">
                For deletion requests or questions, contact <a href="mailto:support@mangaale.com" className="text-mangaale-accent hover:underline">support@mangaale.com</a>.
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

export default AccountDeletionPage
