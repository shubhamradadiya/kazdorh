import LegalPage, { LegalSection } from './LegalPage';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="September 23, 2025" onBack={onBack}>
      <p>
        Nestrix ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we
        collect, use, share, and protect information when you use our property management platform,
        websites, and related services (collectively, the "Services").
      </p>

      <LegalSection title="1. Information we collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-bold text-[#312b3b]">Account information</strong> — such as your
            name, phone number, email address, and account preferences.
          </li>
          <li>
            <strong className="font-bold text-[#312b3b]">Property and booking data</strong> — listing
            details, calendars, guest communications, reservations, and related operational records
            you choose to store in Nestrix.
          </li>
          <li>
            <strong className="font-bold text-[#312b3b]">Payment information</strong> — billing
            details processed by our payment providers (we do not store full card numbers on our
            servers).
          </li>
          <li>
            <strong className="font-bold text-[#312b3b]">Usage and device data</strong> — logs,
            IP address, browser type, device identifiers, and how you interact with the Services.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How we use information">
        <p>We use information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide, maintain, and improve the Services</li>
          <li>Authenticate users and send verification codes</li>
          <li>Process subscriptions and customer support requests</li>
          <li>Send product updates, security alerts, and service notices</li>
          <li>Detect, prevent, and investigate fraud or abuse</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How we share information">
        <p>
          We do not sell your personal information. We may share information with trusted service
          providers who help us operate Nestrix (for example hosting, analytics, payments, and
          messaging), with your team members when you invite them, or when required by law. We may
          also share aggregated or de-identified information that cannot reasonably identify you.
        </p>
      </LegalSection>

      <LegalSection title="4. Data retention">
        <p>
          We retain personal information for as long as your account is active or as needed to
          provide the Services, resolve disputes, enforce our agreements, and meet legal
          requirements. You may request deletion of your account subject to applicable retention
          obligations.
        </p>
      </LegalSection>

      <LegalSection title="5. Security">
        <p>
          We use administrative, technical, and organizational safeguards designed to protect your
          information. No method of transmission or storage is completely secure, so we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="6. Your choices and rights">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or export
          your personal information, or to object to certain processing. To exercise these rights,
          contact us at privacy@nestrix.com. You may also opt out of non-essential marketing
          communications at any time.
        </p>
      </LegalSection>

      <LegalSection title="7. Children's privacy">
        <p>
          Nestrix is not directed to children under 16, and we do not knowingly collect personal
          information from children. If you believe a child has provided us information, please
          contact us so we can take appropriate action.
        </p>
      </LegalSection>

      <LegalSection title="8. International transfers">
        <p>
          Your information may be processed in countries other than your own. Where required, we
          use appropriate safeguards for cross-border transfers.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the revised version
          with an updated "Last updated" date. Continued use of the Services after changes become
          effective constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact us">
        <p>
          If you have questions about this Privacy Policy or our privacy practices, contact
          Nestrix at privacy@nestrix.com or legal@nestrix.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default PrivacyPolicyPage;
