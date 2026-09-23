import LegalPage, { LegalSection } from './LegalPage';

interface TermsOfServicePageProps {
  onBack: () => void;
}

function TermsOfServicePage({ onBack }: TermsOfServicePageProps) {
  return (
    <LegalPage title="Terms of Service" lastUpdated="September 23, 2025" onBack={onBack}>
      <p>
        These Terms of Service ("Terms") govern your access to and use of Nestrix's property
        management platform, websites, and related services (the "Services"). By creating an
        account or using Nestrix, you agree to these Terms.
      </p>

      <LegalSection title="1. Who may use Nestrix">
        <p>
          You must be at least 18 years old and able to form a binding contract to use the
          Services. If you use Nestrix on behalf of a company or other entity, you represent that
          you have authority to bind that entity to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. Your account">
        <p>
          You are responsible for maintaining the confidentiality of your login credentials and
          for all activity under your account. Provide accurate information and promptly update it
          when it changes. Notify us immediately if you suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection title="3. The Services">
        <p>
          Nestrix helps hosts and operators manage listings, bookings, guests, calendars, and
          related property operations. Features may change over time as we improve the product. We
          may suspend or discontinue parts of the Services with reasonable notice when practicable.
        </p>
      </LegalSection>

      <LegalSection title="4. Your content and responsibilities">
        <p>
          You retain ownership of content you upload to Nestrix, including listing details, guest
          communications, and operational records ("Customer Content"). You grant Nestrix a limited
          license to host, process, and display Customer Content solely to provide and improve the
          Services.
        </p>
        <p>You agree that you will not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the Services for unlawful, harmful, or fraudulent purposes</li>
          <li>Upload content that infringes others' rights or violates applicable law</li>
          <li>Attempt to reverse engineer, disrupt, or overload the Services</li>
          <li>Share access credentials or circumvent security controls</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Subscriptions and payments">
        <p>
          Paid plans are billed according to the pricing shown at purchase or in your account.
          Fees are non-refundable except where required by law or expressly stated otherwise.
          Failure to pay may result in suspension or termination of access. Taxes may apply based
          on your location.
        </p>
      </LegalSection>

      <LegalSection title="6. Free trials">
        <p>
          We may offer free trials. Unless you cancel before the trial ends, your subscription may
          convert to a paid plan and you authorize us (or our payment processor) to charge the
          applicable fee.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual property">
        <p>
          Nestrix and its logos, software, design, and documentation are owned by Nestrix or its
          licensors and are protected by intellectual property laws. These Terms do not grant you
          any right to use our trademarks except as needed to identify your use of the Services.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-party services">
        <p>
          The Services may integrate with third-party calendars, messaging providers, payment
          processors, or other tools. Your use of those services is subject to their own terms and
          privacy policies. Nestrix is not responsible for third-party products or services.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimers">
        <p>
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY
          LAW, NESTRIX DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
          WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
        </p>
      </LegalSection>

      <LegalSection title="10. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NESTRIX AND ITS AFFILIATES WILL NOT BE LIABLE FOR
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS,
          REVENUE, DATA, OR BUSINESS OPPORTUNITIES. OUR TOTAL LIABILITY ARISING OUT OF OR RELATED
          TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE AMOUNTS YOU PAID TO NESTRIX IN THE
          TWELVE (12) MONTHS BEFORE THE CLAIM.
        </p>
      </LegalSection>

      <LegalSection title="11. Indemnification">
        <p>
          You will defend and indemnify Nestrix against claims, damages, and expenses arising from
          your Customer Content, your use of the Services, or your violation of these Terms or
          applicable law.
        </p>
      </LegalSection>

      <LegalSection title="12. Termination">
        <p>
          You may stop using the Services at any time. We may suspend or terminate access if you
          breach these Terms, create risk or legal exposure for us, or for prolonged inactivity. On
          termination, your right to use the Services ends, and we may delete Customer Content
          after a reasonable period unless legally required to retain it.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Material changes will be posted with an
          updated "Last updated" date. Continued use of the Services after changes take effect
          means you accept the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>
          Questions about these Terms? Contact Nestrix at legal@nestrix.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

export default TermsOfServicePage;
